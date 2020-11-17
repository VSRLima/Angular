import { CursosServicesService } from '../services/cursos-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[];
  curso: string;
  

  constructor(private service: CursosServicesService) { 
    this.cursos = this.service.getCursos();
  }

  ngOnInit(): void {
    this.service.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    );
  }

}
