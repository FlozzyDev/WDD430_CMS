import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-item',
  standalone: false,
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css',
})
export class MessageItemComponent implements OnInit {
  @Input() message?: Message;
  messageSender?: string;
  belongsToCurrentUser: boolean = false;

  constructor(private contactService: ContactService, private messageService: MessageService) {}

  ngOnInit() {
    if (!this.message || !this.message.sender) {
      this.messageSender = 'Error - could not find user';
      return;
    }
    // Check if sender is already a Contact object (from server with .populate())
    if (typeof this.message.sender === 'object') {
      this.messageSender = this.message.sender.name;
      // Check if this message belongs to the current user (Dallin Hale, id: "101")
      this.belongsToCurrentUser = this.message.sender.id === '101';
    } else {
      // sender is a string ID, look it up in ContactService
      const contact: Contact | null = this.contactService.getContact(this.message.sender);
      if (contact) {
        this.messageSender = contact.name;
        this.belongsToCurrentUser = contact.id === '101';
      } else {
        this.messageSender = 'Error - could not find user';
      }
    }
  }

  onDelete() {
    this.messageService.deleteMessage(this.message!);
  }
}
