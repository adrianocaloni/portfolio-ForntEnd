import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EstudioHeaderComponent } from './components/estudio-header/estudio-header.component';
import { EstudioListComponent } from './components/estudio-list/estudio-list.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ProyectoHeaderComponent } from './components/proyecto-header/proyecto-header.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillHeaderComponent } from './components/skill-header/skill-header.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrabajoHeaderComponent } from './components/trabajo-header/trabajo-header.component';
import { TrabajoListComponent } from './components/trabajo-list/trabajo-list.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PerfilComponent,
    EstudioHeaderComponent,
    EstudioListComponent,
    EstudiosComponent,
    ProyectoHeaderComponent,
    ProyectoListComponent,
    ProyectosComponent,
    SkillHeaderComponent,
    SkillListComponent,
    SkillsComponent,
    TrabajoHeaderComponent,
    TrabajoListComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
