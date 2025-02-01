import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SoliasComponentsComponent } from '@solias-framework/solias-components'

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, SoliasComponentsComponent],
  template: `
    <solias-solias-components />
    <span class="material-icons">phone_android</span>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get('/api').subscribe((res) => console.log(res));
  }
}
