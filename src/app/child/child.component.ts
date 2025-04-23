import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
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
