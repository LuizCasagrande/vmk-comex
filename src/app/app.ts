import {Component, DOCUMENT, Inject, OnInit} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {Header} from './header/header';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
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
export class App implements OnInit {

  protected readonly CURRENT_YEAR = new Date().getFullYear();
  protected enablePreview = false;
  protected location = '';

  constructor(@Inject(DOCUMENT) document: Document,
              private primeNG: PrimeNG,
              private activatedRoute: ActivatedRoute) {
    this.location = document.location.href;
    this.primeNG.ripple.set(true);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe(params => this.enablePreview = params.has('enablePreview') && !this.location.includes('vmkcomex.com.br'));
  }
}
