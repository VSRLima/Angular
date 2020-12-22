import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
  }

  verificadorTouchedEValid(campo) {
    if(!this.formulario.get(campo).valid && this.formulario.get(campo).touched) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    console.log(this.formulario);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe( dados => {
      console.log(dados);
      //this.resetar();
    }, (error:any) => alert('erro'));
  }

  resetar() {
    this.formulario.reset();
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    //"cep" somente com dígitos
    cep = cep.replace(/\D/g,'');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        console.log("validada");
        this.resetaDadosForm();
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
          dados =>{
            this.popularDadosForm(dados);
          } 
          );
      } else {
        //cep é inválido
        this.resetaDadosForm();
        alert("Por gentileza, digite o CEP corretamente (SOMENTE NÚMEROS)");
        console.log
      }
    }
  }

  popularDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm() {
    this.formulario.patchValue({
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
