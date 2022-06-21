import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ListTripsComponent } from './components/list-trips/list-trips.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './components/login/login.guard';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';

const routes: Routes = [
  { path: 'listTrips', component: ListTripsComponent, canLoad: [LoginGuard] },
  { path: 'addVehicle', component: AddVehicleComponent, canLoad: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'listVehicles', component: ListVehiclesComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
