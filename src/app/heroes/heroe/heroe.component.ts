import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Ironman';
  edad  : number = 45;

  nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
   this.edad = 30;
  }

}
