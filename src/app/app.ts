import {Component} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {NgOptimizedImage} from '@angular/common';
import {Page} from './shared/components/page/page';
import {DATA} from './data';
import {Button} from 'primeng/button';
import {Card} from './shared/components/card/card';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    Page,
    Button,
    Card,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  ],
  templateUrl: './app.html',
})
export class App {

  protected readonly DATA = DATA;

  constructor(protected readonly primeNG: PrimeNG) {
    this.primeNG.ripple.set(true);
  }

  scroll(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
