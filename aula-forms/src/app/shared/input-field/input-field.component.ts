import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements  ControlValueAccessor {

  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() holder: string;
  @Input() control;
  @Input() isReadOnly = false;

  private innerValue:any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor() { }

  onChangeCb: (_:any) => void = () => {};
  onTouchedCb: (_:any) => void = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
   this.isReadOnly = isDisabled;
  }

  verificarValidETouched(campo) {
   if(!campo.control.valid && campo.control.touched) {
     return true;
   } else {
     return false;
   }
  }

}
