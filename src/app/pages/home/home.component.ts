import { Component } from '@angular/core';
import { TabMenus } from '../../interfaces/tabMenus';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import menuTabData from '../../../assets/data/tabMenu.json'
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabMenus: TabMenus[] = menuTabData;
  year: any = new Date().getFullYear();

}
