import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  pinnedDocuments: Document[] = [];
  filteredPinnedDocuments: Document[] = [];
  spinner: Spinner = new Spinner();
  searchKey: string = "";

  constructor(documentService: DocumentsApiService, private _documentService: DocumentsService, private router: Router) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.documentService.getPinnedDocuments().subscribe({
      next: (data:any)=>{
        this.pinnedDocuments = data;
        this.filteredPinnedDocuments = this.pinnedDocuments;
        this.spinner.hide();
      }
    })
  }
  pinDocument($event, id){
    this.filteredPinnedDocuments = this.filteredPinnedDocuments.filter(x=>x._id != id);
    this.pinnedDocuments = this.pinnedDocuments.filter(x=>x._id != id);
    this.documentService.pinDocument(id).subscribe();
    $event.stopPropagation();
  }

  filterDocuments($event){
    this.searchKey = $event.target.value;
    if(this.searchKey != ""){
      this.filteredPinnedDocuments = this.pinnedDocuments.filter(x=>{return x.title.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0});
    }
    else
      this.filteredPinnedDocuments = this.pinnedDocuments;
  }

  openDocumentDetails(id:string){
    this.router.navigate(['/dashboard/document', id]);
  }
}
