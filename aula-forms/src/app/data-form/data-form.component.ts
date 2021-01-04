import { Newsletters } from './../models/newsletters';
import { Tecnologias } from './../models/tecnologias';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EstadosService } from './../services/estados.service';
import { EstadoBr } from './../models/estado-br';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { Cargos } from '../models/cargos';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: Observable<EstadoBr[]>;
  cargos: Observable<Cargos[]>;
  tecnologia: Observable<Tecnologias[]>;
  newsletters: Observable<Newsletters[]>;
  itens;
  tecnologias;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private estadoService: EstadosService, private cepService: ConsultaCepService) { }

  ngOnInit(): void {

    this.estados = this.estadoService.getEstadosBr();
    this.cargos = this.estadoService.getCargos();
    this.tecnologia = this.estadoService.getTecnologias();
    this.newsletters = this.estadoService.getNewsletters();

    this.estadoService.getCargos().subscribe(res => {
      this.itens = res[0];
      console.log(this.itens)
    })

    this.estadoService.getTecnologias().subscribe(res => {
      this.tecnologias = res;
      console.log(this.tecnologias);
    })

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
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')]
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
    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe( dados => {
        console.log(dados);
      }, (error:any) => alert('erro'));
    } else {
      console.log('formulário inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      var controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(
        dados =>{
          this.popularDadosForm(dados);
        }
      );
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

  setarCargo() {
    this.formulario.get('cargo').setValue(this.itens);
  }

  compararCargos(ob1, ob2) {
    return ob1 && ob2 ? (ob1.nome === ob2.nome && ob1.nivel === ob2.nivel && ob1.desc === ob2.desc) : ob1 === ob2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologia').setValue(this.tecnologias);
  }
}
