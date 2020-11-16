import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { CursosComponent } from './cursos/cursos.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';

import { InputPropertyComponent } from './input-property/input-property.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent,
    CursosComponent,
    DataBindingComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgclassComponent,
    DiretivaNgforComponent,
    DiretivaNgifComponent,
    DiretivaNgstyleComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    DiretivasCustomizadasComponent,
    ExemploNgContentComponent,
    InputPropertyComponent,
    OperadorElvisComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
