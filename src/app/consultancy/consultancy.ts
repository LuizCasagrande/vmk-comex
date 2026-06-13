import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';
import {NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Textarea} from 'primeng/textarea';
import {Field} from './field/field';
import {BlockUI} from 'primeng/blockui';

@Component({
  selector: 'app-consultancy',
  imports: [
    Button,
    Dialog,
    InputText,
    Message,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    Textarea,
    Field,
    BlockUI
  ],
  templateUrl: './consultancy.html',
  styleUrls: ['./consultancy.scss'],
})
export class Consultancy {

  protected form!: FormGroup;
  protected visibleMessage = true;
  protected visibleForm = false;
  protected blocked = false;
  protected loading = false;

  constructor() {
    this.form = new FormGroup({
      company: new FormControl('', [Validators.required, Validators.minLength(2)]),
      agent: new FormControl('', [Validators.required, Validators.minLength(3)]),
      instagram: new FormControl('', [Validators.required, Validators.minLength(4)]),
      whatsapp: new FormControl('', [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
    });
  }

  protected submit() {
    if (this.form.valid) {
      this.loading = true;
      this.blocked = true;
      setTimeout(() => {
        this.loading = false;
        setTimeout(() => {
          this.reset();
          this.visibleMessage = false;
          this.blocked = false;
        }, 2000);
      }, 3000);
    } else {
      this.form.markAllAsTouched();
      this.form.markAllAsDirty();
      this.form.updateValueAndValidity();
    }
  }

  protected reset() {
    this.visibleForm = false;
    this.form.reset();
  }
}
