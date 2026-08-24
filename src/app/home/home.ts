import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  servicios = [
    {
      id: 1,
      nombre: 'Catálogo variado',
      descripcion: 'Consulta productos de distintas categorías en un solo lugar.',
    },
    {
      id: 2,
      nombre: 'Solicitud rápida',
      descripcion: 'Envíanos el producto que necesitas mediante nuestro formulario.',
    },
    {
      id: 3,
      nombre: 'Inventario actualizado',
      descripcion: 'Inicia sesión para revisar precios y existencias disponibles.',
    },
  ];
}
