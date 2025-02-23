import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'solias-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  isCollapsed = true;

  @Input() menuItems!: ISoliasMenuItem[];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}

export interface ISoliasMenuItem {
  name: string;
  link: string;
  icon: string;
}
