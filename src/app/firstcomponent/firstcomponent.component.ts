import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstcomponentComponent {
  // for interpolation
  sitename = 'myangularproject';

  // for property binding
  imageurl =
    'https://cdn.imago-images.com/Images/header/hello-we-are-imago_03-2023.jpg';

  // for event binding
  counter = 0;

  // for two-way binding
  username = '';

  // for *ngIf
  isloggedin = false;

  isSpecial = true;
  textColor = 'purple';
  isSuccess = true;

  isError = true;
  dynamicclass = 'success';
  //for ngfor
  // users = ['TestUser1', 'TestUser2', 'TestUser3', 'Testuser4'];
  users: string[] = ['Raj', 'Simran', 'Rahul'];

  // Method to increment counter
  incrementcounter() {
    this.counter++;
  }

  // Method to toggle login status
  togglelogin() {
    this.isloggedin = !this.isloggedin;
  }

  togglesuccess() {
    this.isSuccess = !this.isSuccess;
  }

  setclasses() {
    return {
      success: this.isSuccess,
      failure: !this.isSuccess,
      special: this.isSpecial,
    };
  }

  setstyles() {
    return {
      color: this.isError ? 'red' : 'green',
      'font-weight': this.isSpecial ? 'bold' : 'normal',
    };
  }

  isDarkMode = false;

  ngOnInit() {
    // Check system color preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.isDarkMode = prefersDark;
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
