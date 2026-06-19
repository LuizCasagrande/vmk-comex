import {Component} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import {ScrollTop} from 'primeng/scrolltop';
import {Consultancy} from './consultancy/consultancy';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    ScrollTop,
    Consultancy,
  ],
  templateUrl: './app.html',
})
export class App {

  protected readonly CURRENT_YEAR = new Date().getFullYear();

  constructor(private primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }
}
