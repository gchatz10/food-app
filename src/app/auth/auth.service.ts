import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User(
      'Giorgos',
      'Chatzimichail',
      6932662066,
      'george95gr@gmail.com',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LBHszzcjG4uVpYR-SpxUUbUEwhz8S8csczNW63L93xM'
    );
  }
}
