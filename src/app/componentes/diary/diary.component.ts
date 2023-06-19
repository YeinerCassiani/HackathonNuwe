import { Component } from '@angular/core';
import { Producto } from '../../producto';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent {
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
}
