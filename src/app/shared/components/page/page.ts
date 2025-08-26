import {Component, Directive, Input} from '@angular/core';
import {Image} from "primeng/image";
import {NgClass} from '@angular/common';
import {PageDto} from '../../../data/page-dto';

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
  data: PageDto = {} as PageDto;

  @Input()
  reversed = false;
}

@Directive({
  selector: '[pageTemplate]',
})
export class PageTemplate {

  @Input()
  template!: string;
}
