import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png">
        </a>
      </div>
    </nav>

    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    

    <!-- footer -->
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'angular-client';
}
