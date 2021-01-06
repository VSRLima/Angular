import { AbstractControl, FormArray } from '@angular/forms';

export class FormValidators {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const controls = formArray.controls;
      let totalchecked = 0;
      for (var i = 0; i < controls.length; i++) {
        if (controls[i].value) {
          totalchecked += 1;
        }
      }
      return totalchecked >= min ? null: {required: true}
    }
  }
}
