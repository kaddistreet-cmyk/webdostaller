import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Producto } from '../service/producto';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario implements OnInit {

  private productoService = inject(Producto);
  private route = inject(ActivatedRoute);

  productos = signal<any[]>([]);
  vistaCompleta = false;

  ngOnInit() {
    this.vistaCompleta = this.route.snapshot.data['vistaCompleta'];

    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos.set(data);
    });
  }
}
