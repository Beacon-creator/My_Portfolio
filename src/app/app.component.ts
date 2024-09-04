import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutmeComponent } from './layout/pages/aboutme/aboutme.component';
import { PortfolioComponent } from "./layout/pages/portfolio/portfolio.component";
import { TestimonialComponent } from "./layout/pages/testimonial/testimonial.component";
import { ContactmeComponent } from "./layout/pages/contactme/contactme.component";
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Ensure CommonModule is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Add this if NgIf, NgFor, or other common directives are used in your template
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    FooterComponent,
    PortfolioComponent,
    TestimonialComponent,
    ContactmeComponent,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fanaleraPortfolio';
}
