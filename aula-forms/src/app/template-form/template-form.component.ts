import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConsultaCepService } from 'src/app/shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient, private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe( dados => console.log(dados));
  }

  verificadorTouchedEValid(campo) {
    if(!campo.valid && campo.touched) {
      return true;
    } else {
      return false;
    }
  }

  consultaCEP(cep, form) {
    //"cep" somente com dígitos
    cep = cep.replace(/\D/g,'');
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(
        dados =>{
          this.popularDadosForm(dados, form);
        }
      );
    }

  }

  popularDadosForm(dados, form) {
   /*form.setValue({
      nome: null,
      email: null,
      endereco: {
        cep: dados.cep,
        numero: "",
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })*/
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
    console.log(form);
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      endereco: {
        cep: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
