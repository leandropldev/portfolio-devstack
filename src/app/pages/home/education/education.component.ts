import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { Education } from '../../../interfaces/education';

import educationEnData from '../../../../assets/data/education/en-education.json';
import educationPnData from '../../../../assets/data/education/pt-education.json';
import { EducationCardComponent } from "./card/education-card.componet";

@Component({
  selector: 'app-education',
  imports: [EducationCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationCards: Education[] = [];
  activeCardId: number = 0;

  constructor(
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.defineEducationJson(this.translateService.currentLang || 'en');
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.defineEducationJson(event.lang);
    });
  }

  onActiveCardChange(cardId: number) {
    this.activeCardId = cardId;
  }   

  private defineEducationJson(lang: string) {
    this.educationCards = lang === 'en' ? educationEnData : educationPnData;
  }   
}
