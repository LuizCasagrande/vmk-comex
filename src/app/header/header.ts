import {Component, Input} from '@angular/core';
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

  @Input()
  aboutUs?: HTMLElement;

  scrollToAboutUs(): void {
    this.aboutUs!.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
