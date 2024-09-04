import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutmeComponent } from './layout/pages/aboutme/aboutme.component';
import { PortfolioComponent } from './layout/pages/portfolio/portfolio.component';
import { ContactmeComponent } from './layout/pages/contactme/contactme.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '', component: AboutmeComponent },
  { path: '', component: PortfolioComponent },
  { path: '', component: ContactmeComponent },
  // Add other routes here
];
