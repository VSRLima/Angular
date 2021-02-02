import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './../models/curso';
import { CrudService } from './../crud-service';

@Injectable({
  providedIn: 'root'

})
export class CursosServiceService extends CrudService<Curso>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }
}
