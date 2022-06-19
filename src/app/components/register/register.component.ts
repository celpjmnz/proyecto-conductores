import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  UsuariosForm!: FormGroup;
  nombreUsuarioCliente!: string;
  password!: string;
  constructor(private service: LoginService) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.UsuariosForm = new FormGroup({
      nombreUsuarioCliente: new FormControl(this.nombreUsuarioCliente, [
        Validators.required,
      ]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  public create(): void {
    if (this.UsuariosForm.valid) {
      // console.log(this.ViajesForm.value);
      this.service.register(this.UsuariosForm.value).subscribe((res) => {
        console.log('Usuario añadido!');
      });
      //  this.router.navigate(['./listTrips']);
    }
    // this.router.navigate(['./listTrips']);
  }
}
