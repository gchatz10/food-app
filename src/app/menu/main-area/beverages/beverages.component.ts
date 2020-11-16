import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit, DoCheck {
  beverages: Product[] = [];

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.beverages = this.httpRequestService.getBeverages();
    if (this.httpRequestService.sort === 'increasing'){
      this.beverages = this.dataService.incSortProducts(this.beverages);
    } 
    if (this.httpRequestService.sort === 'descending') {
      this.beverages = this.dataService.descSortProducts(this.beverages);
    }
    if (this.httpRequestService.activeTags.length > 0){
      this.beverages = this.dataService.filtersOn(this.beverages);
    }
  }

}
