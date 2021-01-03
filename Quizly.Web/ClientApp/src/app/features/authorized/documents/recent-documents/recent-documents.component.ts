import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';
import { Spinner } from 'src/app/shared/models/spinner';

@Component({
  selector: 'app-recent-documents',
  templateUrl: './recent-documents.component.html',
  styleUrls: ['./recent-documents.component.scss']
})
export class RecentDocumentsComponent implements OnInit {
  recentDocuments: Document[];
  documentService: DocumentsApiService;
  spinner: Spinner = new Spinner();
  constructor(documentService: DocumentsApiService) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.documentService.getRecentDocuments().subscribe({
      next: (data:any)=>{
        this.recentDocuments = data;
        this.spinner.hide();
      }
    })
  }
  pinDocument(id:String){
    let document = this.recentDocuments.find(x=>x._id == id);
    document.pinned = !document.pinned;
    this.documentService.pinDocument(id).subscribe();
  }
}
