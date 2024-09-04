import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-cardreview',
  standalone: true,
  imports: [RatingModule,CarouselModule, CommonModule, FormsModule],
  templateUrl: './cardreview.component.html',
  styleUrls: ['./cardreview.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Optionally add this if you use other web components
})
export class CardreviewComponent {
  @Input() userRating: number = 0;
  @Input() review: string = '';
  @Input() profilePicture: string | null = null;
  @Input() name: string = '';
  @Input() clientCompany: string = 'Personal';
  @Input() company: string = '';

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
