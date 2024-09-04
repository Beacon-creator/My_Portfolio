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
        body: 'Crafting the visual and interactive elements of websites using modern technologies like HTML, CSS, and JavaScript with frameworks like React and Angular to ensure responsive, user-friendly interfaces that enhance user experience.',
        tools:
          'ReactJS, AngularJS, SCSS/TailwindCSS, Typescript, Javascript, Visual Studio Code',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Web App development (Backend)',
        body: 'It involves building the server-side logic, database interactions, and APIs that power web applications. This involves using languages like Node.js, C# and frameworks like Express, .net to manage data and deliver dynamic content to users. It includes performance testing and security of data.',
        tools:
          'NodeJs, ExpressJs, C#, .net framework',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Mobile App development (Frontend)',
        body: 'Developing the user interfaces and experience for mobile applications on platforms like iOS and Android. Using technologies such as React Native, or .net MAUI, the focus is on creating intuitive and responsive designs for mobile devices.',
        tools:
          'ReactNative, .Net Maui, Visual Studio, Visual Studio Code, .Net Framework',
      },
    ],
    // Group 2
    [
      {
        logo: '../../../assets/images/strategy.svg',
        header: 'Mobile App development (Backend)',
        body: 'Developing the server-side components and APIs that support mobile applications. This includes database management, user authentication, security handling, and handling data exchanges by typically using technologies like Firebase, AWS, or custom-built RESTful APIs.',
        tools: 'C#, NodeJs, ExpressJs, ASP .Net core, Azure',
      },
      {
        logo: '../../../assets/images/design.svg',
        header: 'Desktop App development (Full-Stack)',
        body: 'This involves creating cross-platform desktop applications with both frontend and backend capabilities by leveraging frameworks like .NET, Electron and Swift. It includes building high-performance applications that function seamlessly on Windows and macOS.',
        tools: 'WPF, Winforms, Visual Studio, C#',
      },
      {
        logo: '../../../assets/images/branding.svg',
        header: 'Software development (Database Design)',
        body: 'This is the skill that specializes in the design of databases that efficiently store, manage, and retrieve data. Using relational (SQL) and non-relational (NoSQL) database systems to ensure data integrity, scalability, and optimal performance in software applications for all devices.',
        tools: 'SQL, MongoDB',
      },
    ],
    // // Group 3
    [
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Analysis',
        body: 'This skill invloves interpreting complex datasets to uncover trends, patterns, and insights that inform decision-making with tools like MsExcel, R, or SQL, and techniques like statistical analysis and data visualization to turn raw data into clear and usable information for data users.',
        tools: 'ProgreSQL, MsExcel, R',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Visualization',
        body: 'Here, transformation of raw data into clear, engaging, and insightful visual representations to creat charts, graphs, dashboards, and interactive reports that help audiences easily understand complex data patterns and trends is achieved. A better and more infromed decision is also gained.',
        tools: 'ProgreSQL, MsExcel, R',
      },
      {
        logo: '../../../assets/images/webdev.svg',
        header: 'Data Cleaning',
        body: 'This involves ensuring data quality by identifying and correcting errors, inconsistencies, and inaccuracies in datasets by editing, removing, adjusting, summarizing,aggregating e.t.c. This process involves techniques to clean and prepare data for analysis for simple or extented usage.',
        tools: 'SQL, MsExcel',
      },
    ],
    // // Group 4
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2,
      //  verticalViewPortHeight: '230px',
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
       verticalViewPortHeight: '300px',
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
     // verticalViewPortHeight: '200px',
    },
  ];
}
