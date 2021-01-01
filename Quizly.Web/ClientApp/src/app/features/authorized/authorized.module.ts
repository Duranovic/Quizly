import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';
import { AsideComponent } from './main/aside/aside.component';
import { HeaderComponent } from './main/header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [MainComponent, DocumentsComponent, AsideComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorizedModule { }
