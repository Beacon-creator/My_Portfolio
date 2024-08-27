import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardport',
  standalone: true,
  imports: [],
  templateUrl: './cardport.component.html',
  styleUrl: './cardport.component.scss',
})
export class CardportComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = 'Project Title';
  @Input() description: string =
    'Brief description of the project or skills showcased.';
  @Input() tools: string =
    'some tools used for the project.';
  @Input() references: string = 'References used for the project.';
  @Input() githubLink: string = '';
  @Input() websiteLink: string = '';
}
