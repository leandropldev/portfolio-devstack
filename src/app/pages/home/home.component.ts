import { Component } from '@angular/core';
import { TabMenus } from '../../interfaces/tabMenus';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import menuTabData from '../../../assets/data/tabMenu.json'

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabMenus: TabMenus[] = menuTabData;

}
