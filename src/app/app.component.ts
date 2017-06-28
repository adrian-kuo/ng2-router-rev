import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <!-- header -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-color-text--white">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Home</span>
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
        <div class="mdl-cell--4-col">

          <!-- Textfields and button -->
          <form action="#">
          <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" placeholder="Item name...">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" placeholder="Purchased for...">
          </div>

          <!-- Numeric Textfield -->
          <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" placeholder="Price...">
              <span class="mdl-textfield__error">Input is not a number!</span>
          </div>

          <button id="bt-update" type="reset" value="Reset" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              Update
          </button>
          </form>

        </div>

        <!-- Router Outlet -->
        <router-outlet></router-outlet>
      </div>
    </main>

  `,
})
export class AppComponent  {}
