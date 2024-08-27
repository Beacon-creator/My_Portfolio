import { Component } from '@angular/core';
import { CardportComponent } from '../../../components/cardport/cardport.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardportComponent, CarouselModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      imageUrl: '../../../assets/images/products/socialmediaUI.png',
      title: 'ShelterStride (WEB APP)',
      description:
        'A frontend design for a social media platform including responsiveness.',
      websiteLink: 'https://socialaccount.netlify.app/',
    },
    {
      imageUrl: '../../../assets/images/products/portfolio.png',
      title: 'Portfolio (WEB APP)',
      description:
        'Collaborated with a team to create frontend design and API for a competitive project.',
      websiteLink: 'https://shelterstride.netlify.app/',
    },
    {
      imageUrl: '../../../assets/images/products/fanalCash.png',
      title: 'FanalCash (Mobile APP)',
      description:
        'Collaborated with a team to create frontend design and API for a competitive project.',
      websiteLink: 'https://shelterstride.netlify.app/',
    },
    {
      imageUrl: '../../../assets/images/products/eduotter.png',
      title: 'Eduotter (Mobile APP)',
      description:
        'Collaborated with a team to create frontend design and API for a competitive project.',
      websiteLink: 'https://shelterstride.netlify.app/',
    },

    {
      imageUrl: '../../../assets/images/products/shelterstride.png',
      title: 'Grabby (Mobile APP)',
      description:
        'Collaborated with a team to create frontend design and API for a competitive project.',
      websiteLink: 'https://shelterstride.netlify.app/',
    },
    {
      imageUrl: '../../../assets/images/products/logicApp.png',
      title: 'Logic App (Desktop APP)',
      description:
        'Collaborated with a team to create frontend design and API for a competitive project.',
      websiteLink: 'https://shelterstride.netlify.app/',
    },
    // Add more projects as needed
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
