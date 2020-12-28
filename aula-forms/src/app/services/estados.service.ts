import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

import { EstadoBr } from './../models/estado-br';
import { Cargos } from './../models/cargos';
import { Tecnologias } from './../models/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  urlEstados = 'http://localhost:3000/estados';
  urlTecnologias = 'http://localhost:3000/tecnologias';
  urlCargos = 'http://localhost:3000/cargos'

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>(this.urlEstados).pipe(retry(2));
  }

  getCargos() {
    return this.http.get<Cargos[]>(this.urlCargos).pipe(retry(2));
  }

  getTecnologias() {
    return this.http.get<Tecnologias[]>(this.urlTecnologias).pipe(retry(2));
  }
}
