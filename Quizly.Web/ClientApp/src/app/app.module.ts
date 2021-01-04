import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { SignUpComponent } from './features/authentification/sign-up/sign-up.component';
import { SignInComponent } from './features/authentification/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './features/authentification/forgot-password/forgot-password.component';
import { EnterPasswordComponent } from './features/authentification/enter-password/enter-password.component';
import { FeaturesModule } from './features/features.module';
import { MainComponent } from './features/authorized/main/main.component';
import { DocumentsComponent } from './features/authorized/documents/documents.component';
import { NotFoundComponent } from './features/error-pages/not-found/not-found.component';
import { RecentDocumentsComponent } from './features/authorized/documents/recent-documents/recent-documents.component';
import { SharedDocumentsComponent } from './features/authorized/documents/shared-documents/shared-documents.component';
import { PinnedDocumentsComponent } from './features/authorized/documents/pinned-documents/pinned-documents.component';
import { AllDocumentsComponent } from './features/authorized/documents/all-documents/all-documents.component';
import { DocumentDetailsComponent } from './features/authorized/document-details/document-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FeaturesModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'dashboard', pathMatch: "full"},
      { path: 'home', component: HomeComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'enter-password', component: EnterPasswordComponent },
      {path: 'not-found', component: NotFoundComponent},
      { path: 'dashboard', component: MainComponent ,
          children: [
            {path: '', redirectTo: 'documents', pathMatch: 'full'},
            {
              path: 'documents', component: DocumentsComponent,
              children:[
                {path: '', redirectTo: 'recent-documents', pathMatch: 'full' },
                {path: 'recent-documents', component: RecentDocumentsComponent},
                {path: 'shared-documents', component: SharedDocumentsComponent},
                {path: 'pinned-documents', component: PinnedDocumentsComponent},
                {path: 'all-documents', component: AllDocumentsComponent}
              ]},
            {path: 'specs', component: DocumentsComponent},
            {path: 'document/:id', component: DocumentDetailsComponent}
          ]
      },
      {path: "**", redirectTo: 'not-found', pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
