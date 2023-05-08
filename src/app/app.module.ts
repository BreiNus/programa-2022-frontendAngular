import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyQuienSoyComponent } from './components/body-quien-soy/body-quien-soy.component';
import { BodyContactoComponent } from './components/body-contacto/body-contacto.component';
import { Page404Component } from './components/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { interceptorProvider } from './servicios/interceptors/usuario-interceptor.service';
import { PersonaComponent } from './components/persona/persona.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { ExpAcademicaComponent } from './components/exp-academica/exp-academica.component';
import { CrearExpLaboralComponent } from './components/exp-laboral/crear-exp-laboral/crear-exp-laboral.component';
import { CrearExpAcademicaComponent } from './components/exp-academica/crear-exp-academica/crear-exp-academica.component';
import { EditarPersonaComponent } from './components/persona/editar-persona/editar-persona.component';
import { EditarExpLaboralComponent } from './components/exp-laboral/editar-exp-laboral/editar-exp-laboral.component';
import { EditarExpAcademicaComponent } from './components/exp-academica/editar-exp-academica/editar-exp-academica.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CrearProyectosComponent } from './components/proyectos/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { CrearSkillsComponent } from './components/skills/crear-skills/crear-skills.component';
import { EditarSkillsComponent } from './components/skills/editar-skills/editar-skills.component';

//importaciones no proveniente del proyecto
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyQuienSoyComponent,
    BodyContactoComponent,
    Page404Component,
    LoginComponent,
    RegistroComponent,
    CrearExpLaboralComponent,
    CrearExpAcademicaComponent,
    EditarPersonaComponent,
    EditarExpLaboralComponent,
    EditarExpAcademicaComponent,
    ExpAcademicaComponent,
    ExpLaboralComponent,
    PersonaComponent,
    ProyectosComponent,
    SkillsComponent,
    CrearProyectosComponent,
    EditarProyectosComponent,
    CrearSkillsComponent,
    EditarSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
