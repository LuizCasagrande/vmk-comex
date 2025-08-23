import {Component, OnInit} from '@angular/core';
import {DATA, PROJECT_STEPS} from '../data';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Card} from '../shared/components/card/card';
import {Page, PageTemplate} from '../shared/components/page/page';
import {List} from '../shared/components/list/list';
import {ProjectSteps} from '../project-steps/project-steps';
import {environment} from '../../environments/environment';
import {Links} from '../shared/components/links/links';
import {SeoService} from '../core/seo.service';

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
    List,
    ProjectSteps,
    Links,
  ],
  templateUrl: './home.html',
})
export class Home implements OnInit {

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
  protected readonly ADDRESS_PARTS = environment.address.split(',');

  constructor(protected readonly seoService: SeoService) {
  }

  ngOnInit(): void {
    this.seoService.updateMetadata(
      'VMK Comex',
      'Assessoria para Importação. Sua porta de entrada para o mercado internacional de Ferro e Aço.',
      'https://vmkcomex.com.br/logo.png',
      'https://vmkcomex.com.br/home',
    );
  }
}
