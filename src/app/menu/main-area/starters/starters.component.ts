import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent implements OnInit, DoCheck {
  starters: Product[] = [];

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.starters = this.httpRequestService.getStarters();
    if (this.httpRequestService.sort === 'increasing'){
      this.starters = this.dataService.incSortProducts(this.starters);
    } 
    if (this.httpRequestService.sort === 'descending') {
      this.starters = this.dataService.descSortProducts(this.starters);
    }
    if (this.httpRequestService.activeTags.length > 0){
      this.starters = this.dataService.filtersOn(this.starters);
    }
  }

}
