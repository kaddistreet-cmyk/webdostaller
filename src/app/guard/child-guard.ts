import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  const esValido = localStorage.getItem('token') !== null;
  const router = inject(Router);

  if (esValido) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
