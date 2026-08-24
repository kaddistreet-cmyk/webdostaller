import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-admin',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosAdmin {
  acciones = ['Agregar producto', 'Editar producto', 'Actualizar inventario'];
}
