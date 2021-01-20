import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<br>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit()
    }  else {
      console.log('formulário inválido');
      this.verificaValidacoesForm(this.formulario);
      this.verificadorFramework();
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      var controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificadorFramework() {
    if (this.formulario.get('framework').dirty == false) {
      return true
    } else {
      return false
    }
  }

  resetar() {
    this.formulario.reset();
  }

  verificadorTouchedEValid(campo) {
    if(!this.formulario.get(campo).valid && this.formulario.get(campo).touched) {
      return true;
    } else {
      return false;
    }
  }
  

}
