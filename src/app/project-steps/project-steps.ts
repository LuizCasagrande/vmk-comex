import {Component, Input} from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import {Steps} from './steps/steps';

@Component({
  selector: 'app-project-steps',
  imports: [
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Steps,
  ],
  templateUrl: './project-steps.html',
})
export class ProjectSteps {

  @Input()
  data: any[] = [];
}
