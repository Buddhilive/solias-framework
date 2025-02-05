import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'solias-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out'))
    ])
  ]
})
export class NavigationComponent {
  isCollapsed = true;

  @Input() menuItems!: any[];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}