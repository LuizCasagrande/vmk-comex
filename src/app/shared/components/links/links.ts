import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-links',
  imports: [
    Button,
  ],
  templateUrl: './links.html',
})
export class Links {

  protected readonly PHONE = environment.phone;
  protected readonly EMAIL = environment.email;
}
