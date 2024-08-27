import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutmeComponent } from './layout/pages/aboutme/aboutme.component';
import { PortfolioComponent } from "./layout/pages/portfolio/portfolio.component";
import { TestimonialComponent } from "./layout/pages/testimonial/testimonial.component";
import { ContactmeComponent } from "./layout/pages/contactme/contactme.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    FooterComponent,
    PortfolioComponent,
    TestimonialComponent,
    ContactmeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fanaleraPortfolio';
}
