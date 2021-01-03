import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Document} from 'src/app/shared/models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentsApiService {
  documents: Document[];
  recentDocuments: Document[];
  pinnedDocuments: Document[];
  constructor(readonly http: HttpClient) {

   }
    getDocuments (){
      return this.http.get("http://localhost:65189/api/documents/get").pipe(
        tap((data:Document[])=>{this.documents = data})
      );
    }
    getRecentDocuments (){
      return this.http.get("http://localhost:65189/api/documents/getRecent").pipe(
        tap((data:Document[])=>{this.recentDocuments = data})
      );
    }
    getPinnedDocuments (){
      return this.http.get("http://localhost:65189/api/documents/getPinned").pipe(
        tap((data:Document[])=>{this.pinnedDocuments = data})
      );
    }
    pinDocument(id:string){
      return this.http.patch(`http://localhost:65189/api/documents/pinDocument/${id}`, true);
    }
    createDocument(titleAttr: string, typeAttr: string){
      let newDocument: Document = {
        title: titleAttr,
        id: 2,
        dateTime: new Date(),
        pinned : false,
        type: typeAttr
      };
      let document;
      return this.http.put("http://localhost:65189/api/documents/create", newDocument).pipe(
        tap(data=>{document = data; console.log("DATA: " + data)})
      );
    }
}
