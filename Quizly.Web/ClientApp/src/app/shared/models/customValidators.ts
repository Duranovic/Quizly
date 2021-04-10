import { AbstractControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from "@angular/forms";

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

      static mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
    
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
    
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
      }
}