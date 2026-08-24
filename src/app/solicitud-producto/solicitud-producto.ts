import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-solicitud-producto',
  styleUrl: './solicitud-producto.css',
  templateUrl: './solicitud-producto.html',
})
export class SolicitudProducto {

  private fb = inject(FormBuilder);

  formularioSolicitud = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    producto: ['', Validators.required],
    cantidad: [1, [Validators.required, Validators.min(1)]],
    detalle: [''],
  })

  enviarSolicitud() {
    if (this.formularioSolicitud.valid) {
      alert('Solicitud enviada correctamente');
      this.formularioSolicitud.reset({ cantidad: 1 });
    } else {
      alert('Los datos ingresados son incorrectos');
    }
  }

  salirPagina() {
    return this.formularioSolicitud.dirty;
  }
}
