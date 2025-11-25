import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageListChangedEvent = new Subject<Message[]>();
  maxMessageId: number = 0;
  messages: Message[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<{ message: string; messages: Message[] }>('http://localhost:3000/messages')
      .subscribe(
        (responseData) => {
          this.messages = responseData.messages;
          this.maxMessageId = this.getMaxId();
          this.messageListChangedEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.error('Error fetching messages:', error);
        }
      );
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message | null {
    return this.messages.find((message) => message.id === id) || null;
  }

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }

    newMessage.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post<{ message: string; messageDoc: Message }>(
        'http://localhost:3000/messages',
        newMessage,
        {
          headers: headers,
        }
      )
      .subscribe((responseData) => {
        this.messages.push(responseData.messageDoc);
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }

  updateMessage(originalMessage: Message, newMessage: Message) {
    if (!originalMessage || !newMessage) {
      return;
    }

    const pos = this.messages.findIndex((m) => m.id === originalMessage.id);

    if (pos < 0) {
      return;
    }

    newMessage.id = originalMessage.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .put('http://localhost:3000/messages/' + originalMessage.id, newMessage, {
        headers: headers,
      })
      .subscribe((response: any) => {
        this.messages[pos] = newMessage;
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }

  deleteMessage(message: Message) {
    if (!message) {
      return;
    }

    const pos = this.messages.findIndex((m) => m.id === message.id);

    if (pos < 0) {
      return;
    }
    this.http.delete('http://localhost:3000/messages/' + message.id).subscribe((response: any) => {
      this.messages.splice(pos, 1);
      this.messageListChangedEvent.next(this.messages.slice());
    });
  }

  getMaxId(): number {
    let maxId = 0;
    for (let message of this.messages) {
      let currentId = parseInt(message.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }
}
