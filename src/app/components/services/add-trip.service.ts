import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddTripService {
  constructor(public http: HttpClient) {}

  add(trip: any): Observable<any> {
    let url = 'http://localhost:3000/travels';
    return this.http.post(url, trip);
  }

  getVehiculos() {
    let url = 'http://localhost:3000/vehicles';
    return this.http.get(url);
  }
}
