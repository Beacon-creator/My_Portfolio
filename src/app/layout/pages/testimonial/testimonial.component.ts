
import { Component, inject, ViewChild } from '@angular/core';
import { CardreviewComponent } from '../../../components/cardreview/cardreview.component';
import { RatingpopupComponent } from '../../../components/ratingpopup/ratingpopup.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { PopupComponent } from '../../../components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [
    CommonModule,
    CardreviewComponent,
    RatingpopupComponent,
    PopupComponent,
    DialogModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
  ],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @ViewChild('popup') popup!: PopupComponent;
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);
  isRatingFormVisible: boolean = false;
  reviews: any[] = [];

  private http = inject(HttpClient);

  openRatingForm() {
    this.isRatingFormVisible = true;
  }

  closeRatingForm() {
    this.isRatingFormVisible = false;
  }

  addReview(reviewData: any) {
    this.reviews.push(reviewData);
    this.cdr.detectChanges();
    this.closeRatingForm();
  }

  showPopup(message: string, isSuccess: boolean) {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        message,
        isSuccess,
      },
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Popup closed');
    });
  }

  handleFormSubmission(reviewData: any) {
    this.addReview(reviewData);
    this.showPopup('Review submitted successfully!', true);
  }
}
