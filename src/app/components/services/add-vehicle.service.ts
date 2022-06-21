import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Observable } from 'rxjs';
import { trips } from '../shared/models/trips';
import { vehicles } from '../shared/models/vehicles';

@Injectable({
  providedIn: 'root',
})
export class AddVehicleService {
  constructor(public http: HttpClient) {}

  add(data: any): Observable<vehicles> {
    const headers = { 'content-type': 'application/json' };
    let url = 'http://localhost:3000/vehicles';
    return this.http.post<vehicles>(url, data, { headers }).pipe(retry(1));
  }

  getVehiculos() {
    let url = 'http://localhost:3000/vehicles';
    return this.http.get(url);
  }

  delete(idTipoVehiculo: number) {
    let url = 'http://localhost:3000/vehicles/';
    let Url = url + idTipoVehiculo;
    // console.log(Url);
    return this.http.delete(Url).subscribe((data) => {
      console.log(data);
    });
  }
}
