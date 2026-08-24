import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  imports: [],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css',
})
export class Reportes {
  reportes = [
    { nombre: 'Productos publicados', valor: 20 },
    { nombre: 'Solicitudes recibidas', valor: 8 },
    { nombre: 'Usuarios activos', valor: 1 },
  ];
}
