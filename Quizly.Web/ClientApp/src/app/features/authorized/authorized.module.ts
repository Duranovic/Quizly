import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { VoteDetailsComponent } from './document-details/vote-details/vote-details.component';
import { VoteEditComponent } from './document-details/vote-details/vote-edit/vote-edit.component';
import { VoteOptionsComponent } from './document-details/vote-details/vote-options/vote-options.component';
import { VotePreviewComponent } from './document-details/vote-details/vote-preview/vote-preview.component';
import { PollDetailsComponent } from './document-details/poll-details/poll-details.component';
import { QuizDetailsComponent } from './document-details/quiz-details/quiz-details.component';




@NgModule({
  declarations: [MainComponent, DocumentsComponent, AsideComponent, HeaderComponent, AllDocumentsComponent, RecentDocumentsComponent, PinnedDocumentsComponent, SharedDocumentsComponent, DocumentDetailsComponent, VoteDetailsComponent, VoteEditComponent, VoteOptionsComponent, VotePreviewComponent, PollDetailsComponent, QuizDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class AuthorizedModule { }
