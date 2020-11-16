import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-pancakes',
  templateUrl: './pancakes.component.html',
  styleUrls: ['./pancakes.component.css']
})
export class PancakesComponent implements OnInit, DoCheck {
  pancakes: Product[] = [];

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.pancakes = this.httpRequestService.getPancakes();
    if (this.httpRequestService.sort === 'increasing'){
      this.pancakes = this.dataService.incSortProducts(this.pancakes);
    } 
    if (this.httpRequestService.sort === 'descending') {
      this.pancakes = this.dataService.descSortProducts(this.pancakes);
    }
    if (this.httpRequestService.activeTags.length > 0){
      this.pancakes = this.dataService.filtersOn(this.pancakes);
    }
  }

}
