import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormModule } from './data-form/data-form.module';

// import { ErroMsgComponent } from './shared/erro-msg/erro-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    // ErroMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataFormModule
  ],
  exports: [
    // ErroMsgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
