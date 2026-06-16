import {Component, OnInit} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {Header} from './header/header';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
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
export class App implements OnInit {

  protected readonly CURRENT_YEAR = new Date().getFullYear();
  protected experimentalFeatures = false;

  constructor(private primeNG: PrimeNG,
              private activatedRoute: ActivatedRoute) {
    this.primeNG.ripple.set(true);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe(params => this.experimentalFeatures = params.has('experimentalFeatures'));
  }
}
