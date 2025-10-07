import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

  documents: Document[] = [
    new Document(
      '1',
      'Welcome Document',
      'A document that is welcoming.',
      'www.cms.com/documents/welcome',
      null
    ),
    new Document(
      '2',
      'Next Steps',
      'A document that helps with setup.',
      'www.cms.com/documents/next-steps',
      null
    ),
    new Document(
      '3',
      'Things to Do',
      'A document explaining things a user can do.',
      'www.cms.com/documents/things-to-do',
      null
    ),
    new Document(
      '4',
      'Support Options',
      'A document which gives support options.',
      'www.cms.com/documents/support-options',
      null
    ),
    new Document(
      '5',
      'Policies and Terms',
      'A document of policies and terms for the product.',
      'www.cms.com/documents/policies-and-terms',
      null
    ),
  ];
}
