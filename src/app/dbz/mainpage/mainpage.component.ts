import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

  addNewCharacter(personaje: Personaje){
    this.personajes.push(personaje);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
