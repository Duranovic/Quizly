import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    pinDocument(id:Number){
      return this.http.patch(`http://localhost:65189/api/documents/pinDocument/${id}`, true);
    }
}
