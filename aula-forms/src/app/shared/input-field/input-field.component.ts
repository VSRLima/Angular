import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements  ControlValueAccessor {

  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() holder: string;
  @Input() control;

  constructor() { }



}
