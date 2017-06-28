import { Component } from '@angular/core';

@Component({
    template: `
    <h2>Grocery Splitter</h2>
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
    </div>`
})

export class GroceryComponent {}