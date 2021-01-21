import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  globalConfig: Config;
  constructor(readonly http: HttpClient) {

   }
   getDocumentById(id:string){
    return this.http.get(`${Config.baseUrl}/api/documents/GetDocumentById?id=${id}`);
   }
    getDocuments (){
      return this.http.get(`${Config.baseUrl}/api/documents/get`).pipe(
        tap((data:Document[])=>{this.documents = data})
      );
    }
    getRecentDocuments (){
      return this.http.get(`${Config.baseUrl}/api/documents/getRecent`).pipe(
        tap((data:Document[])=>{this.recentDocuments = data})
      );
    }
    getPinnedDocuments (){
      return this.http.get(`${Config.baseUrl}/api/documents/getPinned`).pipe(
        tap((data:Document[])=>{this.pinnedDocuments = data})
      );
    }
    pinDocument(id:string){
      return this.http.patch(`${Config.baseUrl}/api/documents/pinDocument/${id}`, true);
    }
    createDocument(titleAttr: string, typeAttr: string){
      let newDocument: Document = {
        title: titleAttr,
        dateTime: new Date(),
        pinned : false,
        type: typeAttr
      };
      return this.http.put(`${Config.baseUrl}/api/documents/create`, newDocument);
    }
}
