import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormsComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosDeactivateGuard
  ]
})
export class AlunosModule { }
