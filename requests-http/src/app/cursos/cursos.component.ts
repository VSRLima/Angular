import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './../services/cursos.service';
import { Curso } from './../models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  //cursos: Curso[];

  cursos$: Observable<Curso[]>

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list()
  }

}
