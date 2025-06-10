import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../../../interfaces/portfolio';

@Component({
  selector: 'app-portifolio-modal',
  imports: [],
  templateUrl: './portifolio-modal.component.html',
  styleUrl: './portifolio-modal.component.css'
})
export class PortifolioModalComponent {
  @Input() portfolio!: Portfolio;
  @Output() activeModal = new EventEmitter<boolean>();

  closeModal(): void {
    this.activeModal.emit(false);
  }
}
