import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Document} from 'src/app/shared/models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentsApiService {
  constructor(readonly http: HttpClient) {

   }
    getDocuments (){
      return this.http.get("http://localhost:65189/api/documents/get");
    }
    getRecentDocuments (){
      return this.http.get("http://localhost:65189/api/documents/getRecent");
    }
    getPinnedDocuments (){
      return this.http.get("http://localhost:65189/api/documents/getPinned");
    }
    pinDocument(id:String){
      return this.http.patch(`http://localhost:65189/api/documents/pinDocument/${id}`, true);
    }
    createDocument(titleAttr: String, typeAttr: String){
      let newDocument: Document = {
        title: titleAttr,
        id: 2,
        dateTime: new Date(),
        pinned : false,
        type: typeAttr
      };
      return this.http.put("http://localhost:65189/api/documents/create", newDocument);
    }
}
