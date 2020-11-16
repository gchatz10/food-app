import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { MainAreaComponent } from './menu/main-area/main-area.component';
import { CategoriesComponent } from './menu/sidebar/categories/categories.component';
import { CategoryItemComponent } from './menu/sidebar/categories/category-item/category-item.component';
import { NavComponent } from './menu/main-area/nav/nav.component';
import { SaladsComponent } from './menu/main-area/salads/salads.component';
import { BurgersComponent } from './menu/main-area/burgers/burgers.component';
import { PancakesComponent } from './menu/main-area/pancakes/pancakes.component';
import { StartersComponent } from './menu/main-area/starters/starters.component';
import { BeveragesComponent } from './menu/main-area/beverages/beverages.component';
import { ProductComponent } from './menu/main-area/product/product.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductsListComponent } from './search-page/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    MainAreaComponent,
    CategoriesComponent,
    CategoryItemComponent,
    NavComponent,
    SaladsComponent,
    BurgersComponent,
    PancakesComponent,
    StartersComponent,
    BeveragesComponent,
    ProductComponent,
    SearchPageComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
