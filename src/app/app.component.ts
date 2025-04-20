import { Component } from '@angular/core';
import { HeaderComponent } from "./pages/header/header.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-devstack';
}
