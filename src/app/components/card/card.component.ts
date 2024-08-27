import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() logo: string = '';
  @Input() header: string = '';
  @Input() body: string = '';
  @Input() tools: string = '';
  @Input() githubLink: string = '';
  @Input() websiteLink: string = '';
}
;