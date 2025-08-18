import {Component, Input} from '@angular/core';
import {Badge} from 'primeng/badge';
import {PrimeTemplate} from 'primeng/api';
import {Timeline} from 'primeng/timeline';

@Component({
  selector: 'app-steps',
  imports: [
    Badge,
    PrimeTemplate,
    Timeline,
  ],
  templateUrl: './steps.html',
})
export class Steps {

  @Input()
  data: any;

  @Input()
  countStart = 1;
}
