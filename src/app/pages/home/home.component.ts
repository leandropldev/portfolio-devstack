import { Component } from '@angular/core';
import { TabMenus } from '../../interfaces/tabMenus';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabMenus: TabMenus[] = [
    {
      name: 'about.java',
      link: 'about'
    },
    {
      name: 'career.css',
      link: 'career'
    },
    {
      name: 'education.ts',
      link: 'education'
    },
    {
      name: 'contact.tf',
      link: 'contact' 
    }
  ]

  loadContent() {
  }
}
