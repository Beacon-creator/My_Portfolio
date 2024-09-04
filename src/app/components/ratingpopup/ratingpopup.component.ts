import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ratingpopup',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ratingpopup.component.html',
  styleUrls: ['./ratingpopup.component.scss'],
})
export class RatingpopupComponent {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();
  @Output() confirm = new EventEmitter<any>(); // Emit review data

  @Input() header!: string;

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, this.specialCharacterValidator()]],
      image: [''],
      review: ['', [Validators.required]],
      companyType: ['personal'],
      companyName: [''],
      rating: [0, [Validators.required]],
    });
  }

  // Define disableScroll and enableScroll methods
  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflow = 'auto';
  }

  specialCharacterValidator(): ValidatorFn {
    return (control) => {
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        control.value
      );
      return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
    };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.productForm.patchValue({ image: file });
    }
  }

  onCompanyTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const selectedValue = select.value;
    if (selectedValue === 'company') {
      this.productForm.get('companyName')?.setValidators([Validators.required]);
    } else {
      this.productForm.get('companyName')?.clearValidators();
    }
    this.productForm.get('companyName')?.updateValueAndValidity();
  }

  onConfirm() {
    const { name, image, review, companyType, companyName, rating } =
      this.productForm.value;

    const formData = {
      name: name || '',
      image: image || '',
      review: review || '',
      companyType: companyType || 'personal',
      companyName: companyType === 'company' ? companyName : '',
      rating: rating || 0,
    };

    this.confirm.emit(formData); // Emit the review data
    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
