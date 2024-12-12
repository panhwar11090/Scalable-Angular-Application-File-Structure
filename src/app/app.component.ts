import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardComponent } from "./layout/card/card.component"; // Import NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent, CardComponent] // Import the NavbarComponent
  // Import the NavbarComponent
})
export class AppComponent {}
