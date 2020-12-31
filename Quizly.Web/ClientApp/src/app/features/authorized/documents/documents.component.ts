import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';
import {Spinner} from 'src/app/shared/models/spinner';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documentService: DocumentsApiService;
  activePanel: string = 'recent';
  spinner: Spinner = new Spinner();

  documents: Document[];
  recentDocuments: Document[];
  pinnedDocuments: Document[];
  constructor(documentService: DocumentsApiService) {
    this.documentService = documentService;
   }

  ngOnInit() {
      this.spinner.show();
      this.fetchDocuments();
      this.spinner.hide();
  }
  setActivePanel(activePanel: string){
    this.activePanel = activePanel;
  }
  pinDocument(id:Number){
    this.spinner.show();
    this.documentService.pinDocument(id).toPromise().then((data:Document) => {
    this.fetchDocuments();
    this.spinner.hide();
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
