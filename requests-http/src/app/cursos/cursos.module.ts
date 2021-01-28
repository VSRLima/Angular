import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursosComponent } from './curso-list/cursos.component';
import { FormComponent } from './form/form.component';





@NgModule({
  declarations: [CursosComponent, FormComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
