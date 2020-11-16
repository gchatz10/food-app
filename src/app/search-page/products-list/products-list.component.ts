import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.httpRequestService.getProducts();
  }

  ngDoCheck() {
    this.products = this.httpRequestService.getProducts();
    console.log('inside do check of product list');
  }
}
