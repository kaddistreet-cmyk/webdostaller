import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../service/auth';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  errorLogin = signal(false);

  FormulurioLogin = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
  })

  ingresar() {
    if (this.FormulurioLogin.valid) {
      const user = this.FormulurioLogin.value.usuario;
      const contra = this.FormulurioLogin.value.contrasena;

      const exito = this.auth.login(user!, contra!);

      if (exito) {
        this.router.navigate(['/home']);
      } else {
        this.errorLogin.set(true);
      }
    }
  }
}
