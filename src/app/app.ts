import {Component} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import {ScrollTop} from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    ScrollTop,
  ],
  templateUrl: './app.html',
})
export class App {

  constructor(protected readonly primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }
}
