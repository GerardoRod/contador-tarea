import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado = '';


  constructor() { }

  ngOnInit(): void {
  }

  borrarItem(): void {

    this.heroeBorrado = this.heroes.shift() || '';

  }

}
