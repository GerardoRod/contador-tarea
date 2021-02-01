import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './mainpage/mainpage.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarcomponentComponent } from './agregarcomponent/agregarcomponent.component';

import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [MainpageComponent, PersonajesComponent, AgregarcomponentComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ DbzService ],

  exports: [ MainpageComponent ]
})
export class DbzModule { }
