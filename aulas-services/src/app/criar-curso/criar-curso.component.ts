import { CursosServicesService } from '../services/cursos-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosServicesService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso:string) {
    this.cursosService.addCursos(curso);
  }

}
