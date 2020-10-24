import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterPasswordComponent } from './enter-password/enter-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    EnterPasswordComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthentificationModule { }
