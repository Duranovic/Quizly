import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/models/customValidators';
import { FormErrorMessage } from 'src/app/shared/models/form-error-message';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;
  formErrorMessage: FormErrorMessage;

  constructor(private formBuilder: FormBuilder) { 
    this.formErrorMessage = new FormErrorMessage();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [CustomValidators.required, CustomValidators.email]],
      password: ['', CustomValidators.required],
      rememberMe: [true]
    })
  }

}
