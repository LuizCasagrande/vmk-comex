import {Component, Input} from '@angular/core';
import {Fieldset} from 'primeng/fieldset';
import {Image} from 'primeng/image';

@Component({
  selector: 'app-list',
  imports: [
    Fieldset,
    Image,
  ],
  templateUrl: './list.html',
})
export class List {

  @Input()
  items = [''];

  @Input()
  image = '';
}
