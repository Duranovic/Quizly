import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Document} from 'src/app/shared/models/document';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {DocumentsService} from 'src/app/core/services/documents.service';
import { Spinner } from 'src/app/shared/models/spinner';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/fadeIn-animation';
import { getYourDocumentsError, State } from '../../state/document.reducer';
import { Store } from '@ngrx/store';
import {getAllDocuments} from '../../state/document.reducer'
import * as DocumentActions from '../../state/document.actions';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss'],
  animations: [
    fadeIn
  ]
})
export class AllDocumentsComponent implements OnInit {
  documentService: DocumentsApiService;
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  spinner: Spinner = new Spinner();
  searchKey: string = "";
  error$: any;

  constructor(private store:Store<State> ,documentService: DocumentsApiService,private _documentService:DocumentsService, private router: Router) {
    this.documentService = documentService;
   }

  ngOnInit() {
    this.spinner.show();
    this.store.dispatch(DocumentActions.loadAllDocuments());

    this.store.select(getAllDocuments).subscribe(data=>{
      this.filteredDocuments = data;
      this.documents = data;
      this.spinner.hide();
    })

    this.error$ = this.store.select(getYourDocumentsError);
  }
  pinDocument($event, id){
    $event.stopPropagation();
    // this.filteredDocuments = this._documentService.pinDocument(id, this.filteredDocuments);
    // this.documentService.pinDocument(id).subscribe();
    // this.store.dispatch(DocumentActions.loadAllDocuments());
  }
  filterDocuments($event){
    this.searchKey = $event.target.value;
    if(this.searchKey != ""){
      this.filteredDocuments = this.documents.filter(x=>{return x.title.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0});
    }
    else
      this.filteredDocuments = this.documents;
  }
  openDocumentDetails(id:string){
    this.router.navigate(['/dashboard/document', id]);
  }
}
