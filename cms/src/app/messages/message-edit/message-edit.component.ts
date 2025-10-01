import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  currentSender: string = 'Dallin';

  @ViewChild('subject') subjectRef!: ElementRef;
  @ViewChild('msgText') msgTextRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;
    const newMessage = new Message('1', subject, msgText, this.currentSender);

    this.addMessageEvent.emit(newMessage);
    this.onClear(); // adding this since it makes sense to clear the box after we submit the message.
  }

  onClear() {
    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }
}
