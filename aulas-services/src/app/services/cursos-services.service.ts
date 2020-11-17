import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosServicesService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(private logservice: LogService) { }

  getCursos() {
    this.logservice.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  }

  addCursos(curso) {
    this.logservice.consoleLog('Adicionando '+ curso + ' à lista de cursos')
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
