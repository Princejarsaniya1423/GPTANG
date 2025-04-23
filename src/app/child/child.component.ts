import { Component, Input, input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() messageFromParent: string = '';

  @Output() messagetoparent = new EventEmitter<string>();
  senddatatoparent() {
    this.messagetoparent.emit('Hello form Child!');
  }
  name = '';

  resetForm() {
    this.name = '';
  }
}
