import {Component} from '@angular/core';
import {DATA} from '../data';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Card} from '../shared/components/card/card';
import {Page, PageTemplate} from '../shared/components/page/page';

@Component({
  selector: 'app-home',
  imports: [
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    Card,
    Page,
    PageTemplate,
  ],
  templateUrl: './home.html',
})
export class Home {

  protected readonly ADVICE = DATA.get('ADVICE')!;
  protected readonly ABOUT = DATA.get('ABOUT')!;
  protected readonly NUMBERS = DATA.get('NUMBERS')!;
  protected readonly SOLUTIONS = DATA.get('SOLUTIONS')!;
  protected readonly BENEFITS = DATA.get('BENEFITS')!;
}
