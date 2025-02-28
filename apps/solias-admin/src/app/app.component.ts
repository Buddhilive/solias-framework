import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'solias-root',
  template: `<solias-layout />`,
  styles: [],
})
export class AppComponent {
  title = 'solias-admin';
}
