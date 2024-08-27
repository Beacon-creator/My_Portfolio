import { Component, inject } from '@angular/core';
import { CardreviewComponent } from '../../../components/cardreview/cardreview.component';
import { RatingpopupComponent } from '../../../components/ratingpopup/ratingpopup.component';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, CardreviewComponent, RatingpopupComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  isRatingFormVisible: boolean = false; // Set to false initially
  reviews: any[] = [];

  private http = inject(HttpClient); // Inject HttpClient

  openRatingForm() {
    this.isRatingFormVisible = true;
  }

  closeRatingForm() {
    this.isRatingFormVisible = false;
  }

  handleFormSubmission(reviewData: any) {
    // Send review data to the server
    this.http
      .post('http://localhost:3000/submit-review', reviewData)
      .subscribe({
        next: (response) => {
          console.log('Review submitted successfully:', response);
          this.reviews.push(reviewData);
          this.closeRatingForm();
        },
        error: (error) => {
          console.error('Failed to submit review:', error);
        },
      });
  }

  ngOnInit() {
    setInterval(() => {
      if (this.reviews.length > 1) {
        const firstReview = this.reviews.shift();
        this.reviews.push(firstReview);
      }
    }, 3000);
  }
}
