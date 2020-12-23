import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

import { EstadoBr } from './../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  url = 'http://localhost:3000/estados'

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>(this.url).pipe(retry(2));
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc:'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc:'Dev Pl'},
      { nome: 'Dev', nivel: 'Senior', desc:'Dev Sr'}
    ]
  }
}
