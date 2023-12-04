import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//export class AppComponent {
  //constructor(public authService: AuthService) {} 
//}
export class LoginComponent {

    username = '';
    password = '';
    errorMessage = '';

  constructor(private authService: AuthService) { }


  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redireccionar a la página principal o a la página deseada después de iniciar sesión
    } else {
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
    }

  }
  
}
