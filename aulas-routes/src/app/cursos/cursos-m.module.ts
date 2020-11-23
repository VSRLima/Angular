import { CursoDetalheComponent } from 'src/app/cursos/curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosComponent } from '../cursos/cursos.component';
import { CursosService } from '../services/cursos.service';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent, 
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService]
})
export class CursosMModule { }
