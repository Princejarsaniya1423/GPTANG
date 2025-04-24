import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ParentMessage = 'Hello form parent!';
  title = 'Firstapp';
  messagereceived = '';
  commentMsg = '';

  receivemessage(message: string) {
    this.messagereceived = message;
  }
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  resetChildForm() {
    this.childComponent.resetForm();
  }

  @ViewChild('commentContainer') commentContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  addComment() {
    const commentDiv = this.renderer.createElement('div');
    this.renderer.setStyle(commentDiv, 'background-color', '#f0f0f0');
    this.renderer.setStyle(commentDiv, 'padding', '10px');
    this.renderer.setStyle(commentDiv, 'margin', '10px 0');
    this.renderer.setStyle(commentDiv, 'border-radius', '5px');
    this.renderer.setStyle(commentDiv, 'display', 'flex');
    this.renderer.setStyle(commentDiv, 'justify-content', 'space-between');
    this.renderer.setStyle(commentDiv, 'align-item', 'center');

    const text = this.renderer.createText(this.commentMsg);
    this.renderer.appendChild(commentDiv, text);

    const deletebtn = this.renderer.createElement('button');
    const deleteBtnText = this.renderer.createText('Delete');
    this.renderer.appendChild(deletebtn, deleteBtnText);
    this.renderer.setStyle(deletebtn, 'margin-left', '20px');
    this.renderer.setStyle(deletebtn, 'background-color', '#ff5e5e');
    this.renderer.setStyle(deletebtn, 'color', '#fff');
    this.renderer.setStyle(deletebtn, 'border', 'none');
    this.renderer.setStyle(deletebtn, 'padding', '5px 10px');
    this.renderer.setStyle(deletebtn, 'border-radius', '3px');
    this.renderer.setStyle(deletebtn, 'cursor', 'pointer');

    this.renderer.listen(deletebtn, 'click', () => {
      this.renderer.removeChild(
        this.commentContainer.nativeElement,
        commentDiv
      );
    });

    this.renderer.appendChild(commentDiv, deletebtn);

    this.renderer.appendChild(this.commentContainer.nativeElement, commentDiv);
  }
}
