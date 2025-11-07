import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-edit',
  standalone: false,
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css',
})
export class DocumentEditComponent implements OnInit {
  originalDocument?: Document;
  document?: Document;
  editMode: boolean = false;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];

      if (!id) {
        this.editMode = false;
        return;
      }

      this.originalDocument = this.documentService.getDocument(id) || undefined;

      if (!this.originalDocument) {
        return;
      }

      this.editMode = true;
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDocument = new Document('', value.name, value.description, value.url, null);

    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument!, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
