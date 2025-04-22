import { Component, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { JobExperince } from '../../../interfaces/jobExperience';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import careerEnData from '../../../../assets/data/career/en-career.json';
import careerPtData from '../../../../assets/data/career/pt-career.json';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-career',
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit {

  cards: JobExperince[] = [];

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.defineCareerJson(this.translateService.currentLang || 'en');

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.defineCareerJson(event.lang);
      this.reloadPage();
    });
  }

  private defineCareerJson(lang: string) {
    this.cards = lang === 'en' ? careerEnData : careerPtData;
  }

  private reloadPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  calc(value: any){
    
  }
}
