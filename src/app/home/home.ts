import {Component, OnInit} from '@angular/core';
import * as data from '../data';
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

  protected readonly DATA = data;
  protected readonly ADDRESS = environment.address.split(',');

  constructor(private seoService: SeoService) {
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
