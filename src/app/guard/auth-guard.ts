import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const esValido = localStorage.getItem('token') !== null;
  const router = inject(Router);

  if (esValido) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
