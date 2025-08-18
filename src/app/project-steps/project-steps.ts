import {Component, Input} from '@angular/core';
import {Badge} from "primeng/badge";
import {PrimeTemplate} from "primeng/api";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import {Timeline} from "primeng/timeline";

@Component({
  selector: 'app-project-steps',
  imports: [
    Badge,
    PrimeTemplate,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Timeline,
  ],
  templateUrl: './project-steps.html',
  styleUrl: './project-steps.scss'
})
export class ProjectSteps {

  @Input()
  data: any[] = [];
}
