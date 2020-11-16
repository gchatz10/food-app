import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit, DoCheck {
  salads: Product[] = [];

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.salads = this.httpRequestService.getSalads();
    if (this.httpRequestService.sort === 'increasing'){
      this.salads = this.dataService.incSortProducts(this.salads);
    } 
    if (this.httpRequestService.sort === 'descending') {
      this.salads = this.dataService.descSortProducts(this.salads);
    }
    if (this.httpRequestService.activeTags.length > 0){
      this.salads = this.dataService.filtersOn(this.salads);
    }
  }
}
