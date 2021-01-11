import { FormControl, FormGroup } from '@angular/forms';

export class FormValidators {

  // static requiredMinCheckbox(min = 1): ValidatorFn {
  //   const validator = (formArray: FormArray) => {
  //     const controls = formArray.controls;
  //     let totalchecked = 0;
  //     for (var i = 0; i < controls.length; i++) {
  //       if (controls[i].value) {
  //         totalchecked += 1;
  //       }
  //     }
  //     return totalchecked >= min ? null: {required: true};
  //   }
  //}

  static cepValidator(control: FormControl) {

    const cep = control.value;
    if (cep && cep !== "") {
      var validacep = /^\d{5}-\d{3}$/;
      return validacep.test(cep) ? null : {cepInvalido: true}
    }

    return null
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }
     if (!formControl.root || !(<FormGroup>formControl.root).controls) {
       return null;
     }
      const field = (<FormGroup>formControl.root).get(otherField);
      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      };
      return null;
    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres`,
      'cepInvalido': 'Cep inválido.',
      'equalsTo': 'Email não são iguais'
    };
    return config[validatorName];
  }
}
