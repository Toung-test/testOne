import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './about/new/new.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: 'first', component: AboutComponent },
  { path: 'second', component: NewComponent },
  { path: 'third', component: ShopComponent },
];
