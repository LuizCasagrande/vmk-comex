import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';
import {environment} from '../../environments/environment';
import {Links} from '../shared/components/links/links';

@Component({
  selector: 'app-header',
  imports: [
    Button,
    NgOptimizedImage,
    Links,
  ],
  templateUrl: './header.html',
})
export class Header {

  protected readonly DRIVE = environment.drive;

  scrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
