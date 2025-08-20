import {Component, Input} from '@angular/core';
import {CardDto} from '../../../data/card-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
})
export class Card {

  @Input()
  data: CardDto = {} as CardDto;
}
