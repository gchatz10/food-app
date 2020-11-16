import { Component, DoCheck, OnInit } from '@angular/core';
import { Category } from 'src/app/data/category.model';
import { HttpRequestService } from '../../../http-request.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Category[] = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.categories = this.httpRequestService.categories;
  }

  
}
