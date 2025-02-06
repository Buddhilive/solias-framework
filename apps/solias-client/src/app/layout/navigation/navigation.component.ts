import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ISoliasMenuItem } from '../../shared/interfaces/solias-menuitem.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'solias-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out')),
    ]),
  ],
})
export class NavigationComponent {
  isCollapsed = true;

  @Input() menuItems!: ISoliasMenuItem[];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
