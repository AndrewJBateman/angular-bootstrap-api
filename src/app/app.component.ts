import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header />
  <div class="container">
    <router-outlet />
  </div>`
})
export class AppComponent {
  title = 'angular-bootstrap-api';
}
