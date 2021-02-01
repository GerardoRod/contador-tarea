import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarcomponentComponent } from './agregarcomponent/agregarcomponent.component';



@NgModule({
  declarations: [MainpageComponent, PersonajesComponent, AgregarcomponentComponent],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class DbzModule { }
