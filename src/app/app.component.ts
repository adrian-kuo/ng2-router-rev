import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <!-- header -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-color-text--white">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>

    <!-- drawer -->
    <div class="mdl-layout__drawer mdl-color--white">
      <span class="mdl-layout-title"><h4>Tools</h4></span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
        <a class="mdl-navigation__link" [routerLink]="['/groceries']">Groceries</a>
      </nav>
    </div>

    <main class="mdl-layout__content mdl-color--grey-100 mdl-color-text--grey-800">
      <div class="mdl-grid page-content">
        <!-- Router Outlet -->
        <router-outlet></router-outlet>
      </div>
    </main>
  </div>
  `,
})
export class AppComponent { }
