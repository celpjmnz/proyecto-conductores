import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Observable } from 'rxjs';
import { trips } from '../shared/models/trips';

@Injectable({
  providedIn: 'root',
})
export class AddTripService {
  constructor(public http: HttpClient) {}

  add(data: trips): Observable<trips> {
    console.log(data);
    const headers = { 'content-type': 'application/json' };
    let f = new Date(data.fecha).toISOString();
    let body = JSON.stringify({
      fecha: f,
      idCliente: data.idCliente,
      idUsuario: data.idUsuario,
      destino: data.destino,
      idTipoVehiculo: data.idTipoVehiculo,
    });
    let url = 'http://localhost:3000/travels';
    console.log(body);
    return this.http.post<trips>(url, body, { headers }).pipe(retry(1));
  }

  getVehiculos() {
    let url = 'http://localhost:3000/vehicles';
    return this.http.get(url);
  }
}
