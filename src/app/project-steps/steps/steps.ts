import {Component, Input} from '@angular/core';
import {Badge} from 'primeng/badge';
import {PrimeTemplate} from 'primeng/api';
import {Timeline} from 'primeng/timeline';
import {StepsDto} from '../../data/step-dto';

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
  data: StepsDto = {} as StepsDto;

  @Input()
  countStart = 1;
}
