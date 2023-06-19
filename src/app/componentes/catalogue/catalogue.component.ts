import { Component } from '@angular/core';
import { Producto } from '../../producto';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  productos: Producto[] = [
    {
      nombre: 'Danone ECO Natural x 4',
      kcal: 62,
      imagen: 'assets/img/ecoNatural.png'
    },
    {
      nombre: 'Azucarado x 16',
      kcal: 72,
      imagen: 'assets/img/azucarado.png'
    },
    {
      nombre: 'Coco x 4',
      kcal: 72,
      imagen: 'assets/img/coco.png'
    },
    {
      nombre: 'Danone Original Griego Natural',
      kcal: 96,
      imagen: 'assets/img/griego.png'
    }
  ];

  productosFiltrados: Producto[] = [];
  searchTerm = '';
  filtrarProductos(): void {
    this.productosFiltrados = this.productos.filter(producto => {
      
      return producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  limpiarArray(){
    this.productosFiltrados = this.productos;
    this.searchTerm = '';
  }

  constructor(){
    this.productosFiltrados = this.productos;
  }
}
