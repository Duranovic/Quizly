import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from '../../../../../shared/models/document';

@Component({
  selector: 'app-vote-edit',
  templateUrl: './vote-edit.component.html',
  styleUrls: ['./vote-edit.component.scss']
})
export class VoteEditComponent implements OnInit {

  voteEditFormGroup: FormGroup;
  imagePath;
  url;
  document: Document;

  constructor(private documentService: DocumentsApiService, private route: ActivatedRoute) { 
    this.document = new Document(); 
  }

  ngOnInit() {
    this.getDocumentDetails(this.route.snapshot._urlSegment.segments[2].path);      
  }
  submitForm(){
    
  }

  onFileChanged(event){
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }
  getDocumentDetails(id:string){
    this.documentService.getDocumentById(id).subscribe({
      next: (data: Document)=>{
        this.document = data;
        this.voteEditFormGroup = new FormGroup({
          name: new FormControl(this.document.title),
          description: new FormControl((this.document.desctiption)?this.document.desctiption:"Vote description"),
          image: new FormControl("")
        }); 
      }
    })
  }
}
