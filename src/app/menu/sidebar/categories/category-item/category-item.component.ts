import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/data/category.model';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: Category;
  @Input() index: number;
  images: string[] = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.images = this.dataService.images;
  }

  navigateTo(name: string){
    if (name === 'Αναψυκτικά') {
      this.router.navigate(['/home/beverages'])
    } else if (name === 'Σαλάτες') {
      this.router.navigate(['/home/salads'])
    } else if (name === 'Ορεκτικά') {
      this.router.navigate(['/home/starters'])
    } else if (name === 'Pancakes') {
      this.router.navigate(['/home/pancakes'])
    } else if (name === 'Burgers') {
      this.router.navigate(['/home/burgers'])
    }
  }

}
