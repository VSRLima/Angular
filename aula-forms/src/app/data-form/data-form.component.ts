import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

import { EstadosService } from '../shared/services/estados.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from 'src/app/shared/services/consulta-cep.service';
import { Cargos } from '../shared/models/cargos';
import { Newsletters } from '../shared/models/newsletters';
import { Tecnologias } from '../shared/models/tecnologias';
import { FormValidators } from '../shared/models/form-validators';
import { VerificaEmailService } from '../shared/services/verifica-email.service';

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
  itens: any;
  tecnologias: any;
  frameworks: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private estadoService: EstadosService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { }

  ngOnInit(): void {

    this.estados = this.estadoService.getEstadosBr();
    this.cargos = this.estadoService.getCargos();
    this.tecnologia = this.estadoService.getTecnologias();
    this.newsletters = this.estadoService.getNewsletters();
    // this.verificaEmailService.verificarEmail('email@email.com').subscribe()

    this.estadoService.getFrameworks().subscribe(res => {
      this.frameworks = res;
      res.forEach(v => this.framework.push(this.formBuilder.control(false, Validators.minLength(1))))
      console.log(this.frameworks)
    })

    this.estadoService.getCargos().subscribe(res => {
      this.itens = res[0];
      console.log(this.itens)
    });

    this.estadoService.getTecnologias().subscribe(res => {
      this.tecnologias = res;
      console.log(this.tecnologias);
    });

    this.formulario = this.formBuilder.group({
      nome: [null,[ Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [FormValidators.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidators.cepValidator]],
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
      termos: [null, Validators.pattern('true')],
      framework: this.formBuilder.array([])
    });

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ? this.cepService.consultaCEP(this.formulario.get('endereco.cep').value) : EMPTY)
      ).subscribe(dados => dados ? this.popularDadosForm(dados) : {})
      // .subscribe(status => {
      //   if (status === 'VALID') {
      //     this.cepService.consultaCEP(
      //       this.formulario.get('endereco.cep').value)
      //       .subscribe(dados => this.popularDadosForm(dados))
      //     }
      //   }
      // );
  }

  get framework() {
    return this.formulario.get('framework') as FormArray;
  }

  verificadorFramework() {
    if (this.formulario.get('framework').dirty == false) {
      return true
    } else {
      return false
    }
  }

  verificadorTouchedEValid(campo) {
    if(!this.formulario.get(campo).valid && this.formulario.get(campo).touched) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
     valueSubmit = Object.assign(valueSubmit, {
      framework: valueSubmit.framework.map((v,i) => v ? this.frameworks[i] : null).filter(v => v !== null)
    });
    console.log(valueSubmit);
    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit)).subscribe( dados => {
        console.log(dados);
      }, (error:any) => alert('erro'));
    } else {
      console.log('formulário inválido');
      this.verificaValidacoesForm(this.formulario);
      this.verificadorFramework();
    };
    console.log(this.formulario);
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

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
    .pipe(map((emailExiste => emailExiste ? {emailInvalido: true} : null)));
  }
}
