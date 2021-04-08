import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/models/customValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      repeatPassword: ['', 
        CustomValidators.required
      ]
    }, {
      validators: [CustomValidators.checkPasswordMatches()]
    })

    this.signUpForm.statusChanges.subscribe(x=>console.log(x));
  }

}
