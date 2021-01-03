import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';
import { AsideComponent } from './main/aside/aside.component';
import { HeaderComponent } from './main/header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllDocumentsComponent } from './documents/all-documents/all-documents.component';
import { RecentDocumentsComponent } from './documents/recent-documents/recent-documents.component';
import { PinnedDocumentsComponent } from './documents/pinned-documents/pinned-documents.component';
import { SharedDocumentsComponent } from './documents/shared-documents/shared-documents.component';




@NgModule({
  declarations: [MainComponent, DocumentsComponent, AsideComponent, HeaderComponent, AllDocumentsComponent, RecentDocumentsComponent, PinnedDocumentsComponent, SharedDocumentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorizedModule { }
