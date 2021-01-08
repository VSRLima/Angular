import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';
import { EstadosService } from '../shared/services/estados.service';
import { FormDebugComponent } from './../form-debug/form-debug.component';

@NgModule({
  declarations: [
    DataFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent
  ],
  providers: [ EstadosService ]
})
export class DataFormModule { }
