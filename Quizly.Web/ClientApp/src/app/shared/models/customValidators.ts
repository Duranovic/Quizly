import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators extends Validators{
    static checkPasswordMatches() : ValidatorFn {
        return (formGroup: FormGroup) : ValidationErrors | null =>{

            const password = formGroup.controls['password'];
            const repeatPassword = formGroup.controls['repeatPassword'];

            if(!password || !repeatPassword) return null;

            if(!password.value || !repeatPassword.value) return null;

            return (password.value === repeatPassword.value) ? null: {passwordMatch: true};
        }
      }
}