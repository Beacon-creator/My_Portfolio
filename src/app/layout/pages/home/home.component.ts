import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = [
    // Group 1
    [
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Web App development (Frontend)',
        body: 'Description of skill 1',
        tools:
          'ReactJS, AngularJS, CSS/SCSS/TailwindCSS, Typescript, Javascript, Visual Studio Code',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Web App development (Backend)',
        body: 'Description of skill 1',
        tools:
          'ReactJS, AngularJS, CSS/SCSS/TailwindCSS, Typescript, Javascript, Visual Studio Code',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Mobile App development (Frontend)',
        body: 'Description of skill 1',
        tools:
          'ReactNative, .Net Maui, Visual Studio, Visual Studio Code, .Net Framework',
      },
    ],
    // Group 2
    [
      {
        logo: '../../../assets/images/strategy.svg',
        header: 'Mobile App development (Backend)',
        body: 'Description of skill 2',
        tools: 'C#, NodeJs, ExpressJs, ASP .Net core, Azure',
      },
      {
        logo: '../../../assets/images/design.svg',
        header: 'Desktop App development (Full-Stack)',
        body: 'Description of skill 4',
        tools: 'WPF, Winforms, Visual Studio, C#',
      },
      {
        logo: '../../../assets/images/branding.svg',
        header: 'Software development (Database Design)',
        body: 'Description of skill 3',
        tools: 'SQL, MongoDB',
      },
    ],
    // // Group 3
    [
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Engineering',
        body: 'Description of skill 1',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Analysis',
        body: 'Description of skill 1',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Cleaning',
        body: 'Description of skill 1',
      },
    ],
    // // Group 4
    [
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Visualization',
        body: 'Description of skill 1',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Science',
        body: 'Description of skill 1',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Design',
        body: 'Description of skill 1',
      },
    ],
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
      verticalViewPortHeight: '230px',
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
      verticalViewPortHeight: '240px',
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
      verticalViewPortHeight: '200px',
    },
  ];
}
