import {Component} from '@angular/core';
import {DATA} from '../data';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Card} from '../shared/components/card/card';
import {Page, PageTemplate} from '../shared/components/page/page';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

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
    Checkbox,
    FormsModule,
  ],
  templateUrl: './home.html',
})
export class Home {

  protected readonly ADVICE = DATA.get('ADVICE')!;
  protected readonly ABOUT = DATA.get('ABOUT')!;
  protected readonly NUMBERS = DATA.get('NUMBERS')!;
  protected readonly SOLUTIONS = DATA.get('SOLUTIONS')!;
  protected readonly BENEFITS = DATA.get('BENEFITS')!;
  protected readonly SERVICES = DATA.get('SERVICES')!;
  protected readonly FEATURES = DATA.get('FEATURES')!;
  protected readonly SEGMENTS = DATA.get('SEGMENTS')!;
  protected readonly IRON = DATA.get('IRON')!;
  protected readonly FIXATION = DATA.get('FIXATION')!;
  protected readonly WELDING = DATA.get('WELDING')!;
  checked = true;
}
