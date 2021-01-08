import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string) {
    //"cep" somente com dígitos
    cep = cep.replace(/\D/g,'');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
      } else {
        //cep é inválido
        alert("Por gentileza, digite o CEP corretamente (SOMENTE NÚMEROS)");
        return of({});
      }
    }
  }
}
