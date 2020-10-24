import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';



@NgModule({
  declarations: [MainComponent, DocumentsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthorizedModule { }
