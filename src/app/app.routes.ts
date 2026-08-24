import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { ProductosAdmin } from './admin/productos/productos';
import { Reportes } from './admin/reportes/reportes';
import { authGuard } from './guard/auth-guard';
import { childGuard } from './guard/child-guard';
import { matchGuard } from './guard/match-guard';
import { salidaGuard } from './guard/salida-guard';
import { Home } from './home/home';
import { Inventario } from './inventario/inventario';
import { Login } from './login/login';
import { MiCuenta } from './mi-cuenta/mi-cuenta';
import { Nosotros } from './nosotros/nosotros';
import { SolicitudProducto } from './solicitud-producto/solicitud-producto';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'login', component: Login },
  {
    path: 'solicitud-producto',
    component: SolicitudProducto,
    canDeactivate: [salidaGuard],
  },
  {
    path: 'inventario',
    component: Inventario,
    canMatch: [matchGuard],
    data: { vistaCompleta: true },
  },
  {
    path: 'inventario',
    component: Inventario,
    data: { vistaCompleta: false },
  },
  {
    path: 'mi-cuenta',
    component: MiCuenta,
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    component: Admin,
    canActivateChild: [childGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'productos' },
      { path: 'productos', component: ProductosAdmin },
      { path: 'reportes', component: Reportes },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
