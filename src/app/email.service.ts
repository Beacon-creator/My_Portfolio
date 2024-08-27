import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailApiUrl = 'https://api.emailservice.com/send'; // Replace with actual email service API URL

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    return this.http.post(this.emailApiUrl, emailData);
  }
}
