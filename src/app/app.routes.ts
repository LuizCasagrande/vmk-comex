import {Routes} from '@angular/router';
import {Home} from './home/home';

export const routes: Routes = [
  {path: 'home', component: Home},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
