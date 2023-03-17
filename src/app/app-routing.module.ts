import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacionComponent } from './componentes/alimentacion/alimentacion.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';

import { LoginComponent } from './componentes/login/login.component';
import { LotesComponent } from './formularios/lotes/lotes.component';
import { PesoComponent } from './componentes/peso/peso.component';
import { RazasComponent } from './formularios/razas/razas.component';
import { UsuariosComponent } from './formularios/usuarios/usuarios.component';
import { VacasComponent } from './formularios/vacas/vacas.component';
import { ListadoUsuariosComponent } from './listados/listado-usuarios/listado-usuarios.component';
import { ListadoLotesComponent } from './listados/listado-lotes/listado-lotes.component';
import { ListaVacasComponent } from './listados/lista-vacas/lista-vacas.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  //Registro de usuarios
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  //Registro de lotes
  {
    path: 'lotes',
    component: LotesComponent
  },
  //Registro de razas
  {
    path: 'razas',
    component: RazasComponent
  },
  //Registro de vacas
  {
    path: 'vacas',
    component: VacasComponent
  },
  //Estadistica peso
  {
    path: 'estadisticas',
    component: EstadisticasComponent
  },
  //Agregar Nuevo peso
  {
    path: 'peso',
    component: PesoComponent
  },
  //Calculo de alimentacion por lote
  {
    path: 'alimentacion',
    component: AlimentacionComponent
  },
  //Listado de usuarios
  {
    path: 'listausuarios',
    component: ListadoUsuariosComponent
  },
  //listado de lotes
  {
    path: 'listalotes',
    component: ListadoLotesComponent
  },
  //Listado de vacas
  {
    path: 'listavacas',
    component: ListaVacasComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
