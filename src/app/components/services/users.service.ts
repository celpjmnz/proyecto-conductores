import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public http: HttpClient) {}

  getConductores() {
    let url = 'http://localhost:3000/users';
    return this.http.get(url);
  }
}
