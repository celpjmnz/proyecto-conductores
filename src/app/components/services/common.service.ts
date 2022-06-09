import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  canDisplayNavbar = false;

  // private messageSource = new BehaviorSubject(false);
  // currentMessage = this.messageSource.asObservable();

  // Declaración de funciones genéricas para no estar haciendo
  // copy-paste a lo largo del código

  // Importa este servicio y utiliza la función que más convenga

  constructor(public LoginService: LoginService, private router: Router) {}

  public static fechaActual() {
    // devuelve la fecha en formato YYYY-MM-DD (string) teniendo en cuenta el UTC para las zonas horarias
    return new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];
  }

  public static fechaFormateada(inputDeFecha: string | number | Date) {
    // devuelve la fecha en formato YYYY-MM-DD (string) teniendo en cuenta el UTC para las zonas horarias
    return new Date(
      new Date(inputDeFecha).getTime() -
        new Date(inputDeFecha).getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];
  }

  public fechaFormat(inputDeFecha: string | number | Date): Promise<string> {
    // devuelve la fecha en formato YYYY-MM-DD (string) teniendo en cuenta el UTC para las zonas horarias

    const promise = new Promise<string>((resolve, reject) => {
      resolve(
        new Date(
          new Date(inputDeFecha).getTime() -
            new Date(inputDeFecha).getTimezoneOffset() * 60000
        )
          .toISOString()
          .split('T')[0]
      );
    });
    return promise;
  }

  public salir() {
    // this.Router.navigate(['salir']); //NAVEGAR POR RUTAS DESDE UN EVENTO O FUNCIÓN
    this.LoginService.hacerLogout().subscribe(
      (response: { status: any }) => {
        if (response.status == 200) {
          this.router.navigate(['login']);
        }
      },
      (err: { status: any }) => {
        if (err.status == 400) {
          this.router.navigate(['login']);
        }
      }
    );
  }
}
