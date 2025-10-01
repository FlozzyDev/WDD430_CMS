import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Welcome to the app!', 'This is a welcome message! Welcome to CMS.', 'Admin'),
    new Message(
      '2',
      'Hello Again!',
      'If you have any questions, email me or go to out support page!',
      'Adm'
    ),
    new Message(
      '3',
      'How do I change my contact image',
      'Hey does anyone know how to change the image in my contact?',
      'Steve'
    ),
    new Message(
      '4',
      'This app loads smoothly',
      'Nice job on this app guys, it loads so smooth.',
      'Adam'
    ),
    new Message(
      '5',
      'Party Time!',
      'There is a launch party in Building B - Room 204 on Friday at 2:00PM',
      'Admin'
    ),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
