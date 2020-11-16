import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServicesService {

  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso) {
    this.cursos.push(curso);
  }
}
