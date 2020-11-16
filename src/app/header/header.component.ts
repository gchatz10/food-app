import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpRequestService } from '../http-request.service';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('outlet', { read: ViewContainerRef }) outletRef: ViewContainerRef;
  @ViewChild('content', { read: TemplateRef }) contentRef: TemplateRef<any>;
  @ViewChild('searchbar', { static: false }) searchbar: NgForm;
  user: User;
  phrase: RegExp;

  constructor(
    private authService: AuthService,
    private httpRequestService: HttpRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  onSearch() {
    this.router.navigate(['/home']);
    console.log(this.searchbar.value.search.toUpperCase());
    this.phrase = new RegExp(this.searchbar.value.search.toUpperCase());
    this.httpRequestService.createProductsArray(this.phrase);
    this.router.navigate(['/search-results']);
  }
}
