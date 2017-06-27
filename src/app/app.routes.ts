// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryComponent } from './groceries/grocery.component';

// Route Configuration
export const routes: Routes = [
  { path: 'groceries', component: GroceryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);