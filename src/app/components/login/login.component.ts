import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) {}

  login() {
    this.service.login().subscribe((resp) => {
      console.log(resp);
      if (resp) {
        this.router.navigate(['./listTrips']);
      }
    });
  }

  logout() {
    this.router.navigate(['./login']);
  }

  ngOnInit(): void {}
}
