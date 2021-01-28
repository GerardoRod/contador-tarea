import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Acumulador2Component } from './acumulador2/acumulador2.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

const routes: Routes = [
  { path: 'contador', pathMatch: 'full', component: ContadorComponent },
  { path: 'heroe', pathMatch: 'full', component: HeroeComponent },
  { path: 'listado', pathMatch: 'full', component: ListadoComponent },
  { path: 'acumulador', pathMatch: 'full', component: Acumulador2Component },
  { path: '**', pathMatch: 'full', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
