import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vote-edit',
  templateUrl: './vote-edit.component.html',
  styleUrls: ['./vote-edit.component.scss']
})
export class VoteEditComponent implements OnInit {

  voteEditFormGroup: FormGroup;
  imagePath;
  url;

  constructor() { 
    this.voteEditFormGroup = new FormGroup({
      name: new FormControl(""),
      description: new FormControl("This is a description!"),
      image: new FormControl("")
    });    
  }

  ngOnInit() {
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

}
