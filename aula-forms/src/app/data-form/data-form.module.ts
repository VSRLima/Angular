import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';
import { EstadosService } from '../shared/services/estados.service';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { ErroMsgComponent } from './../shared/erro-msg/erro-msg.component';
import { ErrorMsgComponent } from '../shared/error-msg/error-msg.component';
import { InputFieldComponent } from './../shared/input-field/input-field.component';


@NgModule({
  declarations: [
    DataFormComponent,
    FormDebugComponent,
    ErroMsgComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    ErroMsgComponent,
    InputFieldComponent,
    ErrorMsgComponent
  ],
  providers: [ EstadosService ]
})
export class DataFormModule { }
