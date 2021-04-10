import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/models/customValidators';
import { FormErrorMessage } from 'src/app/shared/models/form-error-message';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  formErrorMessage: FormErrorMessage;

  constructor(private formBuilder: FormBuilder) { 
    this.formErrorMessage = new FormErrorMessage();
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [
        CustomValidators.required,
        CustomValidators.email
      ]],
      password: ['', [
        CustomValidators.required,
        CustomValidators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      confirmPassword: ['', 
        CustomValidators.required
      ]
    }, {
      validators: [CustomValidators.mustMatch()]
    })
  }

}
