import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Producto } from './producto';

describe('Producto', () => {
  let service: Producto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Producto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
