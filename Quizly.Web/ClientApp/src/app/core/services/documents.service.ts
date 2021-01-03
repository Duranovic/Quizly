import { Injectable } from '@angular/core';
import {Document} from 'src/app/shared/models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor() { }

  pinDocument(_id:string, documents:Document[]){
    let document = documents.find(document=>document._id == _id);
    document.pinned = !document.pinned;
    return documents;
  }
}
