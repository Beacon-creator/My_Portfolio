import { Component } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cardreview',
  standalone: true,
  imports: [RatingModule,CommonModule, FormsModule],
  templateUrl: './cardreview.component.html',
  styleUrl: './cardreview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Optionally add this if you use other web components
})
export class CardreviewComponent {
  userRating: number = 0; // Initialize with a default rating of 0
  review: string = ''; // User's review text
  profilePicture: string | null = null; // URL of the profile picture
  name: string = ''; // User's personal name
  clientCompany: string = 'Personal'; // Either 'Company' or 'Personal'
  company: string = ''; // Company name, used only if clientCompany is 'Company'

  // Logic to handle file input for profile picture
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}