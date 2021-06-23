import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import { DocumentsService } from 'src/app/core/services/documents.service';
import { fadeIn } from 'src/app/shared/animations/fadeIn-animation';
import {Document} from 'src/app/shared/models/document';
import { Spinner } from 'src/app/shared/models/spinner';
import { getPinnedDocuments, getPinnedDocumentsError, State } from '../../state/document.reducer';
import * as DocumentActions from '../../state/document.actions';


@Component({
  selector: 'app-pinned-documents',
  templateUrl: './pinned-documents.component.html',
  styleUrls: ['./pinned-documents.component.scss'],
  animations: [
    fadeIn
  ]
})
export class PinnedDocumentsComponent implements OnInit {

  documentService: DocumentsApiService;
  pinnedDocuments: Document[] = [];
  filteredPinnedDocuments: Document[] = [];
  spinner: Spinner = new Spinner();
  searchKey: string = "";

  toggleDocument: boolean;
  error$: any;

  constructor(private store: Store<State>, documentService: DocumentsApiService, private router: Router) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.store.dispatch(DocumentActions.loadPinnedDocuments());
    this.store.select(getPinnedDocuments).subscribe(data=>{
      this.filteredPinnedDocuments = data;
      this.pinnedDocuments = data;
      this.spinner.hide();
    })

    this.error$ = this.store.select(getPinnedDocumentsError);

  }
  pinDocument($event, id){
    // this.filteredPinnedDocuments = this.filteredPinnedDocuments.filter(x=>x._id != id);
    // this.pinnedDocuments = this.pinnedDocuments.filter(x=>x._id != id);
    // this.documentService.pinDocument(id).subscribe();
    this.store.dispatch(DocumentActions.pinnDocument({documentId: id}))
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
