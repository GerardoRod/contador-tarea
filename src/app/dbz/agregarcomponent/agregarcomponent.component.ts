import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregarcomponent',
  templateUrl: './agregarcomponent.component.html',
  styleUrls: ['./agregarcomponent.component.scss']
})
export class AgregarcomponentComponent implements OnInit {

  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder : 0,
  };
  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();
  
  constructor(private dbzService: DbzService) { }
  
  agregar(): void{

    if ( this.nuevo.nombre.trim().length === 0 ){ return; }
    // this.onNewCharacter.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
        nombre: '',
        poder : 0,
      };

  }



ngOnInit(): void {
  }

}
