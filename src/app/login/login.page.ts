import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Supongamos que tenemos un usuario de ejemplo para alumno y profesor
    const alumnoUsuario = 'alumno@example.com';
    const alumnoContraseña = '123456';

    const profesorUsuario = 'profesor@example.com';
    const profesorContraseña = '123456';

    // Verificar si el usuario y la contraseña coinciden con los valores en duro
    if (
      (this.email === alumnoUsuario && this.password === alumnoContraseña) ||
      (this.email === profesorUsuario && this.password === profesorContraseña)
    ) {
      // Redirigir al usuario a la vista correspondiente
      if (this.email === alumnoUsuario) {
        this.router.navigate(['/alumnos']);
      } else {
        this.router.navigate(['/profesor']);
      }
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      console.log('Credenciales incorrectas');
    }
  }
}