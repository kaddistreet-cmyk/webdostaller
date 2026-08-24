import { CanDeactivateFn } from '@angular/router';
import { SolicitudProducto } from '../solicitud-producto/solicitud-producto';

export const salidaGuard: CanDeactivateFn<SolicitudProducto> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  const esValido = component.salirPagina();

  if (esValido) {
    return confirm('Tienes datos sin enviar. ¿Estás seguro de que deseas salir de la página?');
  }

  return true;
};
