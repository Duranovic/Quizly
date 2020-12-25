import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Output() isCreateNewDocumentModalOpened = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  isCreateNewDocumentModalEmit(isOpened: boolean){
    this.isCreateNewDocumentModalOpened.emit(isOpened);
  }
}
