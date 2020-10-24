import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './features/authentification/sign-up/sign-up.component';
import { SignInComponent } from './features/authentification/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './features/authentification/forgot-password/forgot-password.component';
import { EnterPasswordComponent } from './features/authentification/enter-password/enter-password.component';
import { FeaturesModule } from './features/features.module';
import { MainComponent } from './features/authorized/main/main.component';
import { DocumentsComponent } from './features/authorized/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FeaturesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: NavMenuComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'enter-password', component: EnterPasswordComponent },
      { path: 'dashboard', component: MainComponent ,
          children: [
            {path: '', redirectTo: 'documents', pathMatch: 'full'},
            {path: 'documents', component: DocumentsComponent},
            {path: 'specs', component: DocumentsComponent}
          ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
