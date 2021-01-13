import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InternalErrorComponent } from './internal-error/internal-error.component';



@NgModule({
  declarations: [NotFoundComponent, InternalErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ErrorPagesModule { }
