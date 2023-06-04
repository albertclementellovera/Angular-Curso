import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  //url='https://scratchya.com.ar/angular/proyecto016/'; // disponer url de su servidor que tiene las páginas PHP
  API: string='http://localhost:8012/proyecto016/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.API}recuperartodos.php`);
  }

  alta(articulo:any) {
    return this.http.post(`${this.API}alta.php`, JSON.stringify(articulo));
  }

  baja(codigo:number) {
    return this.http.get(`${this.API}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo:number) {
    return this.http.get(`${this.API}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.API}modificacion.php`, JSON.stringify(articulo));
  }
}
