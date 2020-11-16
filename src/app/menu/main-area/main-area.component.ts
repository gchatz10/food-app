import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product.model';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  starters: Product[] = [];
  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.starters = this.httpRequestService.starters;
  }

}
