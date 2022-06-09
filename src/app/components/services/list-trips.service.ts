import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
//import { URL_BASE } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListTripsService {
  navegacionUrl: any;
  token: any;
  constructor(public http: HttpClient, public snackBar: MatSnackBar) {}

  getDatosTabla(): Observable<any> {
    this.token = localStorage.getItem('token');

    let headers: any = new Headers({
      'Content-Type': 'application/json',
    });

    let postParams = JSON.stringify({ token: this.token });
    this.navegacionUrl = 'http://localhost/gt/obtener_viajes.php';

    return this.http.post(this.navegacionUrl, postParams, { headers }).map(
      (data: any) => {
        return data;
      },
      (error: any) => {}
    );
  }
}
