import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isVisibleCreateDocumentModal: boolean = false;
  documentForm = this.formBuilder.group(
    {
      title: ['', Validators.required],
      type: ['', Validators.required]
    }
  )
  constructor(private formBuilder: FormBuilder, private documentService:DocumentsApiService) {

  }

  openCreateDocumentModalVisibillity(){
    this.isVisibleCreateDocumentModal = true;
  }
  closeCreateDocumentModalVisibillity(){
    this.isVisibleCreateDocumentModal = false;
  }
  isCreateNewDocumentModalChange($event){
    this.isVisibleCreateDocumentModal = $event;
  }
  onSubmit(){
    if(this.documentForm.valid){
      this.documentService.createDocument(this.documentForm.controls.title.value, this.documentForm.controls.type.value).toPromise().then(createdDocument=>{
      });
    }else{
      alert("FORM IS NOT VALID");
    }
  }

  documentTypeClick($event){
    let listElements = $event.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll("li");
    listElements.forEach(element => {
      element.classList.remove("selected");
    });
    $event.target.parentElement.parentElement.classList.add("selected");
  }
  ngOnInit() {
  }

}
