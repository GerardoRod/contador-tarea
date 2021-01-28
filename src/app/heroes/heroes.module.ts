import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule { }