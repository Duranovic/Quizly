import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from '../../../shared/models/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documentService: DocumentsApiService;
  activePanel: string = 'recent';
  documents: Document[];
  recentDocuments: Document[];
  pinnedDocuments: Document[];
  constructor(documentService: DocumentsApiService) {
    this.documentService = documentService;
    this.fetchDocuments();
   }

  ngOnInit() {
  }
  setActivePanel(activePanel: string){
    this.activePanel = activePanel;
  }
  pinDocument(id:Number){
    this.documentService.pinDocument(id).toPromise().then((data:Document) => {
    this.fetchDocuments();
    })
  }

  fetchDocuments(){
    this.documentService.getDocuments().subscribe((data:Document []) =>{
      this.documents = data;
    })
    this.documentService.getRecentDocuments().subscribe((data:Document []) => {
      this.recentDocuments = data;
    })
    this.documentService.getPinnedDocuments().subscribe((data:Document []) => {
      this.pinnedDocuments = data;
    })
  }
}
