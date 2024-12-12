import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MegaMenuItem, MenuItem } from 'primeng/api';  // Import MegaMenuItem
import { HttpClient } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CardModule, ButtonModule, MenuModule,ToolbarModule],  // Add MenuModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // menuItems: MenuItem[] = [
  //   { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
  //   { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
  //   { label: 'Services', icon: 'pi pi-cogs', routerLink: '/services' },
  //   { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
  // ];

  menuActive = false;

  toggleMenu() {
    console.log('toggle')
    this.menuActive = !this.menuActive;
  }
  
}
