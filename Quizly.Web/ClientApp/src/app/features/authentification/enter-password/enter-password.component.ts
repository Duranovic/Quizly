import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/models/customValidators';
import { FormErrorMessage } from 'src/app/shared/models/form-error-message';

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.scss']
})
export class EnterPasswordComponent implements OnInit {
  formGroup: FormGroup;
  formErrorMessage: FormErrorMessage;

  constructor(private formBuilder: FormBuilder) { 
    this.formErrorMessage = new FormErrorMessage();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [CustomValidators.required, CustomValidators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      confirmPassword: ['', [CustomValidators.required]]
    }, {
      validators: [CustomValidators.mustMatch()]
    })
  }

}
