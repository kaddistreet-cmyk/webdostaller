import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debe crear la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debe mostrar el encabezado y el pie de página', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const contenido = fixture.nativeElement as HTMLElement;

    expect(contenido.querySelector('app-header')).toBeTruthy();
    expect(contenido.querySelector('app-footer')).toBeTruthy();
  });
});
