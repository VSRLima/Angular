import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

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

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        console.log("validada");
        this.resetaDadosForm(form);
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
          dados =>{
            this.popularDadosForm(dados, form);
          } 
          );
      } else {
        //cep é inválido
        this.resetaDadosForm(form);
        alert("Por gentileza, digite o CEP corretamente (SOMENTE NÚMEROS)");
        console.log
      }
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
