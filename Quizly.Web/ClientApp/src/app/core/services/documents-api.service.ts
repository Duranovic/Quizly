import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Config } from 'src/app/shared/models/config';
import {Document} from 'src/app/shared/models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentsApiService {
  documents: Document[];
  recentDocuments: Document[];
  pinnedDocuments: Document[];
  constructor(readonly http: HttpClient, private readonly config:Config) {}
  
   getDocumentById(id:string){
    return this.http.get(`${this.config.baseUrl}/documents/GetDocumentById?id=${id}`);
   }
    getDocuments (){
      return this.http.get(`${this.config.baseUrl}/documents/get`);
    }
    getRecentDocuments (){
      return this.http.get(`${this.config.baseUrl}/documents/getRecent`);
    }
    getPinnedDocuments (){
      return this.http.get(`${this.config.baseUrl}/documents/getPinned`).pipe(
        tap((data:Document[])=>{this.pinnedDocuments = data})
      );
    }
    pinDocument(id:string){
      alert(id);
      return this.http.patch(`${this.config.baseUrl}/documents/pinDocument/${id}`, true);
    }
    createDocument(titleAttr: string, typeAttr: string){
      let newDocument: Document = {
        title: titleAttr,
        dateTime: new Date(),
        pinned : false,
        type: typeAttr
      };
      return this.http.put(`${this.config.baseUrl}/documents/create`, newDocument);
    }
}
