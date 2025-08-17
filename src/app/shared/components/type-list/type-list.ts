import {Component, Input} from '@angular/core';
import {Fieldset} from 'primeng/fieldset';
import {Image} from 'primeng/image';

@Component({
  selector: 'app-type-list',
  imports: [
    Fieldset,
    Image,
  ],
  templateUrl: './type-list.html',
})
export class TypeList {

  @Input()
  values = [''];

  @Input()
  image = '';
}
