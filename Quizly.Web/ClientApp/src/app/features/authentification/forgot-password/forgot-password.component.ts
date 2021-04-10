import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/models/customValidators';
import { FormErrorMessage } from 'src/app/shared/models/form-error-message';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  formGroup: FormGroup;
  formErrorMessage: FormErrorMessage;

  constructor(private formBuilder: FormBuilder) {
    this.formErrorMessage = new FormErrorMessage();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [CustomValidators.required, CustomValidators.email]]
    })
  }

}
