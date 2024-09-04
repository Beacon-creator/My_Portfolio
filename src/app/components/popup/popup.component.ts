import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'], // Corrected to styleUrls (plural)
})
export class PopupComponent {
  isVisible: boolean = false;
  message: string = '';
  isSuccess: boolean = true;

  show() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000); // Hide after 3 seconds
  }
}
