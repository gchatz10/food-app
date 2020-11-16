import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;
  tags: string[] = [];
  activeTags: string[] = [];
  submitted: boolean = false;

  constructor(private httpRequestService: HttpRequestService, private dataService: DataService) { }

  ngOnInit(): void {
    this.tags = this.httpRequestService.tags;
  }

  onSubmit(){
    this.activeTags = [];
    this.httpRequestService.sort = 'none';
    if (this.form.value.Vegetarian){
      this.activeTags.push('Vegetarian')
    }
    if (this.form.value.Κρεατικά){
      this.activeTags.push('Κρεατικά')
    }
    if (this.form.value.Πικάντικα){
      this.activeTags.push('Πικάντικα')
    }
    if (this.form.value.dropdown === 'increasing'){
      this.httpRequestService.sort = 'increasing';
    } 
    if (this.form.value.dropdown === 'descending'){
      this.httpRequestService.sort = 'descending';
    }
    this.httpRequestService.activeTags = this.activeTags;
    this.submitted = true;
    console.log('Active Tags: ' + this.httpRequestService.activeTags);
  }

  resetForm(){
    this.form.reset();
    this.onSubmit();
    this.submitted = false;
  }
}
