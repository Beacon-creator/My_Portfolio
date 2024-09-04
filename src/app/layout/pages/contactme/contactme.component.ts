import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent {
  contactForm: FormGroup;
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) //  private toastr: ToastrService
  {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactReason: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Show spinner before making the request
      this.showSpinner = true;

      this.http.post('http://localhost:3000/contact-me', formData).subscribe({
        next: (response) => {
          // Hide spinner
          this.showSpinner = false;

          // Show success alert
          window.alert('Message sent successfully!');
        },
        error: (error) => {
          // Hide spinner
          this.showSpinner = false;

          // Show error alert
          window.alert('Failed to send message.');
        },
      });
    }
  }
}
