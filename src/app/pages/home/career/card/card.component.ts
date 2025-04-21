import { Component, Input } from '@angular/core';
import { JobExperince } from '../../../../interfaces/jobExperience';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: JobExperince;
}
