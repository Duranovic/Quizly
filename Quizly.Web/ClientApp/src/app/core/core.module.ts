import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsApiService } from './services/documents-api.service';
import {Config} from '../shared/models/config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Config
  ],
  providers: [DocumentsApiService]
})
export class CoreModule { }
