import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AccesoService } from '../services/acceso.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  datos: any;
  nombre_usuario: any;
  password: any;
  confirm_password!: string;
  id_privilegio: any;
  valido: any;
  resultadoLogin: any;
  token: any;
  checked: any;
  showSpinner!: boolean;
  error = false;
  recu_pass = false;
  reset_pass = false;
  check_token_passwd = false;
  token_passwd!: string;
  id_vtc_passwd!: string;
  resetedpass!: string;
  api_token?: string;

  resetPassFormGroup!: FormGroup;

  loginForm!: FormGroup;
  cambiarPasswordForm!: FormGroup;
  resetPasswordForm!: FormGroup;

  constructor(
    public login: LoginService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    public commonService: CommonService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token_passwd = params['token'];
      this.resetedpass = params['resetedpass'];

      if (this.resetedpass) {
        this.recu_pass = false;
        this.reset_pass = false;
      }

      if (this.token_passwd) {
        this.reset_pass = true;
        this.checkPassToken(this.token_passwd);
      }
    });
  }

  checkPassToken(token_passwd: string) {
    this.login.checkPassToken(token_passwd).subscribe((data: any) => {
      if (data === 'exito') {
        this.check_token_passwd = true;
      }
    });
  }

  ngOnInit(): void {}
}
