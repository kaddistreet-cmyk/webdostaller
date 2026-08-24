import { Service } from '@angular/core';

@Service()
export class Auth {

  private user = 'admin';
  private contra = '1234';

  login(usuario: string, contrasena: string): boolean {
    if (usuario === this.user && contrasena === this.contra) {
      localStorage.setItem('token', usuario);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  estarLogueado(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
