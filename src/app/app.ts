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

  protected readonly CURRENT_YEAR = new Date().getFullYear();

  constructor(private primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }
}
