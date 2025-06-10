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
  portfolioCards: Portfolio[] = [];
  translateService = inject(TranslateService);

  ngOnInit(): void {
    this.definePortfolioJson(this.translateService.currentLang || 'en');
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.definePortfolioJson(event.lang);
    });
  }

  private definePortfolioJson(lang: string) {
    this.portfolioCards = lang === 'en' ? portfolioEnData : portfolioPtData;
  } 
}
