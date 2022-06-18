import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../login/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  login() {
    let url = 'http://localhost:3000/users';
    return this.http.get<Usuario>(url);
  }
}
