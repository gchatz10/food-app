import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit, DoCheck {
  burgers: Product[] = [];

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.burgers = this.httpRequestService.getBurgers();
    if (this.httpRequestService.sort === 'increasing'){
      this.burgers = this.dataService.incSortProducts(this.burgers);
    } 
    if (this.httpRequestService.sort === 'descending') {
      this.burgers = this.dataService.descSortProducts(this.burgers);
    }
    if (this.httpRequestService.activeTags.length > 0){
      this. burgers = this.dataService.filtersOn(this.burgers);
    }
  }

}
