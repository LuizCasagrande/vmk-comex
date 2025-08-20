import {Component} from '@angular/core';
import {DATA, PROJECT_STEPS} from '../data';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Card} from '../shared/components/card/card';
import {Page, PageTemplate} from '../shared/components/page/page';
import {TypeList} from '../shared/components/type-list/type-list';
import {ProjectSteps} from '../project-steps/project-steps';
import {environment} from '../../environments/environment';
import {Button} from 'primeng/button';

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
    TypeList,
    ProjectSteps,
    Button,
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
  protected readonly PROJECT = DATA.get('PROJECT')!;
  protected readonly PROJECT_STEPS = PROJECT_STEPS;
  protected readonly PHONE = environment.phone;
  protected readonly EMAIL = environment.email;
  protected readonly ADDRESS = environment.address;
}
