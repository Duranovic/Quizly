import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationModule } from './authentification/authentification.module';
import { AuthorizedModule } from './authorized/authorized.module';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationModule,
    AuthorizedModule,
    ErrorPagesModule,
    SharedModule
  ]
})
export class FeaturesModule { }
