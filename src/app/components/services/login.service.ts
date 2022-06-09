import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { URL_BASE } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  navegacionUrl: any;
  token: any;
  constructor(
    public http: HttpClient,
    private route: Router,
    public snackBar: MatSnackBar
  ) {}

  hacerLogout() {
    let headers: any = new Headers({
      'Content-Type': 'application/json',
    });
    let postParams = new FormData();
    postParams.append('token', localStorage.getItem('token')!);

    this.navegacionUrl = 'api/private/logout.php';
    return this.http.post(this.navegacionUrl, postParams, {
      headers,
      observe: 'response',
    });
  }

  checkPassToken(token_passwd: string) {
    let headers: any = new Headers({
      'Content-Type': 'application/json',
    });

    let postParams = JSON.stringify({ token_passwd });

    this.navegacionUrl = 'api/private/check_token_passwd.php';

    return this.http.post(this.navegacionUrl, postParams, { headers }).map(
      (data: any) => {
        return data;
      },
      (error: any) => {}
    );
  }
}
