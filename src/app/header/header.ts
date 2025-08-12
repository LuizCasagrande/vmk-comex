import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    Button,
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
})
export class Header {

  scrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
