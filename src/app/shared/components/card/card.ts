import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
})
export class Card {

  @Input()
  header = '';

  @Input()
  body = '';

  @Input()
  icon = '';
}
