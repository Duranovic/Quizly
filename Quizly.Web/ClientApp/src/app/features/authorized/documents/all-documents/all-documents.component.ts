import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Document} from 'src/app/shared/models/document';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {DocumentsService} from 'src/app/core/services/documents.service';
import { Spinner } from 'src/app/shared/models/spinner';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent implements OnInit {
  documentService: DocumentsApiService;
  documents: Document[];
  spinner: Spinner = new Spinner();

  constructor(documentService: DocumentsApiService,private _documentService:DocumentsService) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.documentService.getDocuments().subscribe({
      next: (data:any)=>{
        this.documents = data;
        this.spinner.hide();
      }
    })
  }
  pinDocument(id){
    this.documents = this._documentService.pinDocument(id, this.documents);
    this.documentService.pinDocument(id).subscribe();
  }

}
