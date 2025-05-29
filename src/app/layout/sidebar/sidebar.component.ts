import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // ✅ nécessaire pour utiliser *ngIf, *ngFor, etc.
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public openSubMenu: string | null = null;
  collapsed: boolean = false;

  @Input() isCollapsed = false;

  toggleSubMenu(menu: string) {
    if (this.openSubMenu === menu) {
      this.openSubMenu = null;
    } else {
      this.openSubMenu = menu;
    }
  }

  toggleAside() {
    this.collapsed = !this.collapsed; // Inverse l'état du menu
  }
}
