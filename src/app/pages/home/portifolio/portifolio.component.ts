import { Component, inject } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { Portfolio } from '../../../interfaces/portfolio';

import portfolioEnData from '../../../../assets/data/portfolio/en-portfolio.json';
import portfolioPtData from '../../../../assets/data/portfolio/pt-portfolio.json';
import { PortifolioModalComponent } from "./portifolio-modal/portifolio-modal.component"; 

@Component({
  selector: 'app-portifolio',
  imports: [PortifolioModalComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent {
  portfolioList: Portfolio[] = [];
  portfolioModal: Portfolio = {} as Portfolio;
  isDisplayModal: boolean = false;

  translateService = inject(TranslateService);  

  ngOnInit(): void {
    this.definePortfolioJson(this.translateService.currentLang || 'en');
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.definePortfolioJson(event.lang);
    });
  }

  private definePortfolioJson(lang: string) {
    this.portfolioList = lang === 'en' ? portfolioEnData : portfolioPtData;
  } 

  displayModal(portfolio: Portfolio): void {
    this.isDisplayModal = true;
    this.portfolioModal = portfolio;
  }

  closeModal(): void {
    this.isDisplayModal = false;
    this.portfolioModal = {} as Portfolio;
  }

  closeModalFromOutside(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('fixed')) {
      this.closeModal();
    }
  }
}
