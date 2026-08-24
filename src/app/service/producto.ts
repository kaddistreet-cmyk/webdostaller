import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Producto {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  obtenerProductos() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
