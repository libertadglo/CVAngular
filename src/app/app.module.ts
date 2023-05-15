import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { BanerfotoComponent } from './banerfoto/banerfoto.component';
import { FormacionacademicaComponent } from './formacionacademica/formacionacademica.component';
import { ExperienciaslaboralesComponent } from './experienciaslaborales/experienciaslaborales.component';
import { MicuidadComponent } from './micuidad/micuidad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    HabilidadesComponent,
    BanerfotoComponent,
    FormacionacademicaComponent,
    ExperienciaslaboralesComponent,
    MicuidadComponent,
    DashboardComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
