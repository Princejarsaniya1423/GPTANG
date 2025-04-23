import { Component, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstcomponentComponent, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ParentMessage = 'Hello form parent!';
  title = 'Firstapp';
  messagereceived = '';

  receivemessage(message: string) {
    this.messagereceived = message;
  }
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  resetChildForm() {
    this.childComponent.resetForm();
  }
}
