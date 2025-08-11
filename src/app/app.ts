import {Component} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {Page, PageTemplate} from './shared/components/page/page';
import {DATA} from './data';
import {Card} from './shared/components/card/card';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [
    Page,
    Card,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    PageTemplate,
    Header,
  ],
  templateUrl: './app.html',
})
export class App {

  protected readonly DATA = DATA;

  constructor(protected readonly primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }
}
