import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import { fadeIn } from 'src/app/shared/animations/fadeIn-animation';

@Component({
  selector: 'app-shared-documents',
  templateUrl: './shared-documents.component.html',
  styleUrls: ['./shared-documents.component.scss'],
  animations: [
    fadeIn
  ]
})
export class SharedDocumentsComponent implements OnInit {

  documentService: DocumentsApiService;
  constructor(documentService: DocumentsApiService) {
    this.documentService = documentService;
   }

  ngOnInit() {
  }

}
