import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService){}
  
  onLanguageChange() {
    this.translateService.use(this.selectedLanguage);
  }
}
