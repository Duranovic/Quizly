import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationModule } from './authentification/authentification.module';
import { AuthorizedModule } from './authorized/authorized.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationModule,
    AuthorizedModule
  ],
  exports: [
    // AuthentificationModule
  ]

})
export class FeaturesModule { }
