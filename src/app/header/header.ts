import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [
    Button,
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
})
export class Header {

  protected readonly PHONE = environment.phone;
  protected readonly EMAIL = environment.email;

  protected scrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
