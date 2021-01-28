import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { MainpageComponent } from './dbz/mainpage/mainpage.component';

const routes: Routes = [
  { path: 'contador', pathMatch: 'full', component: ContadorComponent },
  { path: 'heroe', pathMatch: 'full', component: HeroeComponent },
  { path: 'listado', pathMatch: 'full', component: ListadoComponent },
  { path: 'dbz', pathMatch: 'full', component: MainpageComponent },
  { path: '**', pathMatch: 'full', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
