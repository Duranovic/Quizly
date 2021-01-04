import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';

@Component({
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
  document: Document;
  constructor(private documentService: DocumentsApiService, private route: ActivatedRoute) {
    this.document = new Document();
  }

  ngOnInit() {
    this.getDocumentDetails(this.route.snapshot.paramMap.get("id"));
  }

  getDocumentDetails(id:string){
    this.documentService.getDocumentById(id).subscribe({
      next: (data: Document)=>{
        this.document = data;
      }
    })
  }


}
