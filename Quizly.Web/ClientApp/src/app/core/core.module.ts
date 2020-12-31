import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsApiService } from './services/documents-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DocumentsApiService]
})
export class CoreModule { }
