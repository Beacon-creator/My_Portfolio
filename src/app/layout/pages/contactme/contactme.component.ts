import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      console.log('Form Submitted:', formData);
      // Handle form submission logic
    }
  }
}
