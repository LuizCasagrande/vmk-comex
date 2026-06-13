import {Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-field',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './field.html',
})
export class Field {

  @Input()
  id = '';

  @Input()
  label = '';

  @Input()
  required = true;
}
