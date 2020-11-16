import { CursosService } from './services-curso.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;//Type were give by TypeScript

  cursos: string [];

  constructor(public cursosService: CursosService) {
    this.nomePortal = "http://loiane.training";
    /*for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/
    //var servico = new CursosService();
    this.cursos = this.cursosService.getCurso();
   }

  ngOnInit(): void {
  }

}