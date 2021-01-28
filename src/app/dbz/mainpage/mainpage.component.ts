import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre: string;
  poder : number;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    },
    {
      nombre: 'Krillin',
      poder: 5000
    },
    {
      nombre: 'Androide 16',
      poder: 12000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder : 0,
  };

  agregar(): void{
    if ( this.nuevo.nombre.trim().length === 0 ){ return; }

  }

  submit(){
    console.log(this.nuevo);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
