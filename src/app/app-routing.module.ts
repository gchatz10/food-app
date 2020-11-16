import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeveragesComponent } from './menu/main-area/beverages/beverages.component';
import { BurgersComponent } from './menu/main-area/burgers/burgers.component';
import { PancakesComponent } from './menu/main-area/pancakes/pancakes.component';
import { SaladsComponent } from './menu/main-area/salads/salads.component';
import { StartersComponent } from './menu/main-area/starters/starters.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home/starters', pathMatch: 'full'},
  {path: 'home', component: MenuComponent, children:[
    {path: 'starters', component: StartersComponent},
    {path: 'beverages', component: BeveragesComponent},
    {path: 'burgers', component: BurgersComponent},
    {path: 'pancakes', component: PancakesComponent},
    {path: 'salads', component: SaladsComponent}
  ]},
  {path: 'search-results', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
