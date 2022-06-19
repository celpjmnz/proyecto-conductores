import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ListTripsComponent } from '../list-trips/list-trips.component';
import { RegisterComponent } from '../register/register.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listTrips', component: ListTripsComponent, canLoad: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
