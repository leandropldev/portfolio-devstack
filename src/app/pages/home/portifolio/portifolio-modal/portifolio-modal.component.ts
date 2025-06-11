import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../../../interfaces/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portifolio-modal',
  imports: [CommonModule],
  templateUrl: './portifolio-modal.component.html',
  styleUrl: './portifolio-modal.component.css'
})
export class PortifolioModalComponent {
  @Input() portfolio!: Portfolio;
  @Output() closeModal = new EventEmitter<void>();

  closeModalEmitter(): void {
    this.closeModal.emit();
  }
}
