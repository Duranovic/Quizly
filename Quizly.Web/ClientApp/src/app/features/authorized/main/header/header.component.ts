import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showProfilePopup: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  togglePopupProfilePopup(){
    this.showProfilePopup = !this.showProfilePopup ;
  }

}
