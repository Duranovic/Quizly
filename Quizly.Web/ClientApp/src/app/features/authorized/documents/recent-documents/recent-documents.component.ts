import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import { fadeIn } from 'src/app/shared/animations/fadeIn-animation';
import {Document} from 'src/app/shared/models/document';
import { Spinner } from 'src/app/shared/models/spinner';
import { getRecentDocumentsError, getRecentDocuments, State } from '../../state/document.reducer';
import * as DocumentActions from '../../state/document.actions';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-recent-documents',
  templateUrl: './recent-documents.component.html',
  styleUrls: ['./recent-documents.component.scss'],
  animations: [
    fadeIn
  ]
})
export class RecentDocumentsComponent implements OnInit {
  recentDocuments: Document[] = [];
  filteredRecentDocuments: Document[] = [];
  documentService: DocumentsApiService;
  spinner: Spinner = new Spinner();
  searchKey: string = "";
  toggleDocument: boolean;

  data$: Observable<Document[]>;

  recentDocuments$: Observable<Document[]>;
  error$: Observable<string>;

  constructor(private store:Store<State>, documentService: DocumentsApiService, private router: Router) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.store.dispatch(DocumentActions.loadRecentDocuments());
    this.store.select(getRecentDocuments).subscribe((data: Document[])=>{
        this.recentDocuments = data;
        this.filteredRecentDocuments = data;
        this.spinner.hide();
      }
    )
    this.error$ = this.store.select(getRecentDocumentsError);
  }
  pinDocument($event, id:string){
    $event.stopPropagation();
    // let document = this.recentDocuments.find(x=>x._id == id);
    // document.pinned = !document.pinned;
    // this.documentService.pinDocument(id).subscribe();
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
