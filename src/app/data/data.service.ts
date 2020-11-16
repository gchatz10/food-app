import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  products: Product[] = [];
  images = [
    '../../assets/starters.svg',
    '../../assets/salads.svg',
    '../../assets/burger.svg',
    '../../assets/pancakes.svg',
    '../../assets/beverages.svg',
  ];

  constructor(private httpRequestService: HttpRequestService) {}

  incSortProducts(products: Product[]) {
    return products.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  descSortProducts(products: Product[]) {
    return products.sort((a, b) => (a.price < b.price ? 1 : -1));
  }

  filtersOn(products: Product[]) {
    let counter = 0;
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < this.httpRequestService.activeTags.length; j++) {
        if (products[i].tags.includes(this.httpRequestService.activeTags[j])) {
          counter++;
        }
      }
      if (counter < this.httpRequestService.activeTags.length) {
        products.splice(i, 1);
        i--;
      }
      counter = 0;
    }
    return products;
  }
}
