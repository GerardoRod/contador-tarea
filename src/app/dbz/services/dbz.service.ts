import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{
    private _personajes: Personaje[] = [
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

       get personajes(): Personaje[]{
           return [...this._personajes];
       }

    constructor() {}

    agregarPersonaje (personaje: Personaje): void {
        this._personajes.push(personaje);
    }

}
