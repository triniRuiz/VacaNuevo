import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotesComponent } from './formularios/lotes/lotes.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PesoComponent } from './componentes/peso/peso.component';
import { RazasComponent } from './formularios/razas/razas.component';
import { UsuariosComponent } from './formularios/usuarios/usuarios.component';
import { VacasComponent } from './formularios/vacas/vacas.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ListadoUsuariosComponent } from './listados/listado-usuarios/listado-usuarios.component';
import { ListadoLotesComponent } from './listados/listado-lotes/listado-lotes.component';
import { ListaVacasComponent } from './listados/lista-vacas/lista-vacas.component';
import { VacaComponent } from './componentes/Editar/vaca/vaca.component';
import { RazaComponent } from './componentes/Editar/raza/raza.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlimentacionComponent } from './formularios/alimentacion/alimentacion.component';
import { ListaFormulasComponent } from './listados/lista-formulas/lista-formulas.component';



@NgModule({
  declarations: [
    AppComponent,
    LotesComponent,
    LoginComponent,
    NavbarComponent,
    PesoComponent,
    RazasComponent,
    UsuariosComponent,
    VacasComponent,
    EstadisticasComponent,
    AlimentacionComponent,
    ListadoUsuariosComponent,
    ListadoLotesComponent,
    ListaVacasComponent,
    VacaComponent,
    RazaComponent,
    ListaFormulasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
