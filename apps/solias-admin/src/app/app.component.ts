import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";

@Component({
  standalone: true,
  imports: [LayoutComponent],
  selector: 'solias-root',
  template: `<solias-layout />`,
  styles: [],
})
export class AppComponent {}
