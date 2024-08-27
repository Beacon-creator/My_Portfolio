import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  // ViewChild will allow you to access the DOM elements
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('navbarLinks') navbarLinks!: ElementRef;

  // This method runs after the component's view has been initialized
  ngAfterViewInit(): void {
    this.menuToggle.nativeElement.addEventListener('click', () => {
      this.navbarLinks.nativeElement.classList.toggle('active');
    });
  }
}
