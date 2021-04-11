import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-options',
  templateUrl: './vote-options.component.html',
  styleUrls: ['./vote-options.component.scss']
})
export class VoteOptionsComponent implements OnInit {


  options: any;

  constructor() { 
  }

  ngOnInit() {
    this.options =  [
      "Some option", "Option 2", "Unpopular option", "Something else"
    ]
  }

}
