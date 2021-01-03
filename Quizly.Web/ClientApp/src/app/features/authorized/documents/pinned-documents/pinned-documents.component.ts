import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import { DocumentsService } from 'src/app/core/services/documents.service';
import {Document} from 'src/app/shared/models/document';
import { Spinner } from 'src/app/shared/models/spinner';


@Component({
  selector: 'app-pinned-documents',
  templateUrl: './pinned-documents.component.html',
  styleUrls: ['./pinned-documents.component.scss']
})
export class PinnedDocumentsComponent implements OnInit {

  documentService: DocumentsApiService;
  pinnedDocuments: Document[];
  spinner: Spinner = new Spinner();
  constructor(documentService: DocumentsApiService, private _documentService: DocumentsService) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.documentService.getPinnedDocuments().subscribe({
      next: (data:any)=>{
        this.pinnedDocuments = data;
        this.spinner.hide();
      }
    })
  }
  pinDocument(id){
    this.pinnedDocuments = this.pinnedDocuments.filter(x=>x._id != id);
    this.documentService.pinDocument(id).subscribe();
  }

}
