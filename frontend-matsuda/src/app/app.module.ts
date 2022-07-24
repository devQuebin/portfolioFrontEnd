import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExpComponent } from './componentes/exp/exp.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AutenticacionService } from './servicios/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    PerfilComponent,
    ExpComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
