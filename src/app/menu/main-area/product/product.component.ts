import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

  add(product: Product){
    console.log( product.name + ' added to cart');
  }
}
