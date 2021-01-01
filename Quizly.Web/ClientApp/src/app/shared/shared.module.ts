import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDirective } from './directives/spinner.directive';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SpinnerDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SpinnerDirective
  ]
})
export class SharedModule { }
