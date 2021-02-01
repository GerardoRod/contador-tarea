import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregarcomponent',
  templateUrl: './agregarcomponent.component.html',
  styleUrls: ['./agregarcomponent.component.scss']
})
export class AgregarcomponentComponent implements OnInit {

  constructor() { }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder : 0,
  };
  
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if ( this.nuevo.nombre.trim().length === 0 ){ return; }
    this.onNewCharacter.emit(this.nuevo);
    this.nuevo = {
        nombre: '',
        poder : 0,
      };

  }



ngOnInit(): void {
  }

}
