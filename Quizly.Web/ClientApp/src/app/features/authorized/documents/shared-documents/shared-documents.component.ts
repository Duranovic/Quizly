import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';

@Component({
  selector: 'app-shared-documents',
  templateUrl: './shared-documents.component.html',
  styleUrls: ['./shared-documents.component.scss']
})
export class SharedDocumentsComponent implements OnInit {

  documentService: DocumentsApiService;
  constructor(documentService: DocumentsApiService) {
    this.documentService = documentService;
   }

  ngOnInit() {
  }

}
