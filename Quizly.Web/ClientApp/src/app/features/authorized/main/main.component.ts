import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isVisibleCreateDocumentModal: boolean = false;
  constructor() { }

  openCreateDocumentModalVisibillity(){
    this.isVisibleCreateDocumentModal = true;
  }
  closeCreateDocumentModalVisibillity(){
    this.isVisibleCreateDocumentModal = false;
  }
  ngOnInit() {
  }

}
