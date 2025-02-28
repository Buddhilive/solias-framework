import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'solias-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  isLoggedIn = true;

  login() {
    console.info('Logged in');
  }

  logout() {
    console.info('Lougout');
  }
}
