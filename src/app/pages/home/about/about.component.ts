import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { InputLineCommand } from '../../../interfaces/inputLinesCommand';
import { CommonModule, isPlatformServer } from '@angular/common';
import jsonData from '../../../../assets/data/about.json';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  
  lines: InputLineCommand[] = jsonData;
  displayedLines: string[] = [];
  currentLineIndex = 0;
  interval: any;
  cursorBlinking: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platform: Object) {}
  
  ngOnInit(): void {
    if (!isPlatformServer(this.platform)) {
      this.typeNextLine();
    }
  }

  private typeNextLine(): void {
    if (this.currentLineIndex >= this.lines.length) {
      this.cursorBlinking = false;
      return;
    }
    this.cursorBlinking = true;
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
    }, 30);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
