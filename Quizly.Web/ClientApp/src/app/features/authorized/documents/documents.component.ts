import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import {Document} from 'src/app/shared/models/document';
import {Spinner} from 'src/app/shared/models/spinner';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  activePanel: string = 'recent';

  constructor() {
   }

  ngOnInit() {
  }
  setActivePanel(activePanel: string){
    this.activePanel = activePanel;
  }
}
