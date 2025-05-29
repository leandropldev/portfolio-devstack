import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { InputLineCommand } from '../../../interfaces/inputLinesCommand';
import { CommonModule, isPlatformServer } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import aboutEnData from '../../../../assets/data/about/en-about.json';
import aboutPtData from '../../../../assets/data/about/pt-about.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule, 
    TranslateModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  
  lines: InputLineCommand[] = [];
  displayedLines: string[] = [];
  currentLineIndex = 0;
  interval: any;
  isTyping: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
    private translateService: TranslateService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.defineAboutJsonFile(this.translateService.currentLang || 'en');
    if (!isPlatformServer(this.platform)) {
      this.typeNextLine();
    }

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.defineAboutJsonFile(event.lang);
      this.reloadPage();
    });
  }

  private typeNextLine(): void {
    if (this.currentLineIndex >= this.lines.length) {
      this.isTyping = false;
      return;
    }
    const line: InputLineCommand = this.lines[this.currentLineIndex];
    let text = '';
    
    let i = 0;
    this.interval = setInterval(() => {
      if (i < line.text.length) {
        text += line.text.charAt(i++);
        this.displayedLines[this.currentLineIndex] = text;
      } else {
        clearInterval(this.interval);
        this.currentLineIndex++;
        setTimeout(() => this.typeNextLine(), 400);
      }
    }, 10);
  }

  private defineAboutJsonFile(lang: string) {
    this.lines = lang === 'en' ? aboutEnData : aboutPtData;
  }

  private reloadPage(){ 
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/career', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
