import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';
import { AsideComponent } from './main/aside/aside.component';



@NgModule({
  declarations: [MainComponent, DocumentsComponent, AsideComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthorizedModule { }
