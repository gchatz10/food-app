import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Category } from './data/category.model';
import { Product } from './data/product.model';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class HttpRequestService {
  token: string;
  categories: Category[] = [];
  products: Product[] = [];
  starters: Product[] = [];
  salads: Product[] = [];
  burgers: Product[] = [];
  pancakes: Product[] = [];
  beverages: Product[] = [];
  tags: string[] = [];
  activeTags: string[] = [];
  searchedProducts: Product[] = [];
  sort: string = 'none';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.user.token;
    this.onFetchCategories(this.token);
    this.onFetchProducts(this.token);
  }

  getProducts() {
    return this.searchedProducts.slice();
  }

  getPancakes() {
    return this.pancakes.slice();
  }

  getSalads() {
    return this.salads.slice();
  }

  getBeverages() {
    return this.beverages.slice();
  }

  getBurgers() {
    return this.burgers.slice();
  }

  getStarters() {
    return this.starters.slice();
  }

  private onFetchCategories(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<Category[]>(
        'https://fe-assignment-server.herokuapp.com/api/v1/food/categories',
        { headers: headers }
      )
      .pipe(
        map((responseData) => {
          return responseData.sort((a, b) => (a.index > b.index ? 1 : -1));
        })
      )
      .subscribe((responseData) => {
        this.categories = responseData;
        console.log(this.categories);
      });
  }

  private onFetchProducts(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<Product[]>(
        'https://fe-assignment-server.herokuapp.com/api/v1/food/products',
        { headers: headers }
      )
      .subscribe((responseData) => {
        this.products = responseData;
        for (let i = 0; i < this.products.length; i++) {
          switch (this.products[i].categoryId) {
            case 'food_category_1':
              this.beverages.push(this.products[i]);
              break;
            case 'food_category_2':
              this.salads.push(this.products[i]);
              break;
            case 'food_category_3':
              this.burgers.push(this.products[i]);
              break;
            case 'food_category_4':
              this.starters.push(this.products[i]);
              break;
            case 'food_category_5':
              this.pancakes.push(this.products[i]);
              break;
            default:
            // code block
          }

          // create tags
          for (let j = 0; j < this.products[i].tags.length; j++) {
            if (this.tags.indexOf(this.products[i].tags[j]) === -1) {
              //new tag found
              this.tags.push(this.products[i].tags[j]);
            }
          }
        }
        console.log(this.products);
        console.log(this.tags);
      });
  }

  createProductsArray(phrase: RegExp) {
    this.searchedProducts = [];
    let id: string;
    for (let j=0; j<this.categories.length; j++){
      if (this.categories[j].name.toUpperCase().search(phrase) !== -1){
        id = this.categories[j].id;
      }
    }
    for (let i = 0; i < this.products.length; i++) {
      if (
        this.products[i].name.toUpperCase().search(phrase) !== -1 ||
        this.products[i].id.toUpperCase().search(phrase) !== -1 ||
        this.products[i].categoryId === id
      ) {
        this.searchedProducts.push(this.products[i]);
      }
    }
    console.log(this.searchedProducts);
  }
}
