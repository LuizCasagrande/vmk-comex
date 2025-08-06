import {Component, Input} from '@angular/core';
import {Image} from "primeng/image";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [
    Image,
    NgClass,
  ],
  templateUrl: './page.html',
})
export class Page {

  @Input()
  header = '';

  @Input()
  body = '';

  @Input()
  image = '';

  @Input()
  reversed = false;
}
