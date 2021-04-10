import { Component, OnInit } from '@angular/core';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import { fadeIn } from 'src/app/shared/animations/fadeIn-animation';
import {Document} from 'src/app/shared/models/document';
import {Spinner} from 'src/app/shared/models/spinner';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
}
