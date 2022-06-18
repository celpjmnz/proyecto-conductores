import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ListTripsComponent } from '../list-trips/list-trips.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listTrips', component: ListTripsComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
