import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from "./footer/footer.component";
import { NAVIGATIONS_CONFIG } from '../config/navigations.config';
import { TopBarComponent } from "./top-bar/top-bar.component";

@Component({
  selector: 'solias-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent, TopBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  navigations = NAVIGATIONS_CONFIG;
}
