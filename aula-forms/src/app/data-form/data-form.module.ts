import { FormDebugComponent } from './../form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';

@NgModule({
  declarations: [
    DataFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [
    FormDebugComponent
  ]
})
export class DataFormModule { }
