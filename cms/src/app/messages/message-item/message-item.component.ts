import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact.model';

@Component({
  selector: 'cms-message-item',
  standalone: false,
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css',
})
export class MessageItemComponent implements OnInit {
  @Input() message?: Message;
  messageSender?: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // Setting a timeout since my contacts are taking a sec to load for some reason, may think of something better
    setTimeout(() => {
      const contact: Contact | null = this.contactService.getContact(
        this.message?.sender || 'Error - could not find user'
      );
      if (contact) {
        this.messageSender = contact.name;
      } else {
        this.messageSender = 'Error - could not find user';
      }
    }, 100);
  }
}
