import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';
import { Spinner } from 'src/app/shared/models/spinner';

@Component({
  selector: 'app-recent-documents',
  templateUrl: './recent-documents.component.html',
  styleUrls: ['./recent-documents.component.scss']
})
export class RecentDocumentsComponent implements OnInit {
  recentDocuments: Document[] = [];
  filteredRecentDocuments: Document[] = [];
  documentService: DocumentsApiService;
  spinner: Spinner = new Spinner();
  searchKey: string = "";
  constructor(documentService: DocumentsApiService, private router: Router) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.documentService.getRecentDocuments().subscribe({
      next: (data:any)=>{
        this.recentDocuments = data;
        this.filteredRecentDocuments = this.recentDocuments;
        this.spinner.hide();
      }
    })
  }
  pinDocument($event, id:string){
    let document = this.recentDocuments.find(x=>x._id == id);
    document.pinned = !document.pinned;
    this.documentService.pinDocument(id).subscribe();
    $event.stopPropagation();
  }
  filterDocument($event){
    this.searchKey = $event.target.value;
    if(this.searchKey != "")
      this.filteredRecentDocuments = this.recentDocuments.filter(x=>{return x.title.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0});
    else
      this.filteredRecentDocuments = this.recentDocuments;
  }
  openDocumentDetails(id:string){
    this.router.navigate(['/dashboard/document', id]);
  }
}
