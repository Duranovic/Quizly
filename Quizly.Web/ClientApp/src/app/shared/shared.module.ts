import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDirective } from './directives/spinner.directive';



@NgModule({
  declarations: [
    SpinnerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerDirective
  ]
})
export class SharedModule { }
