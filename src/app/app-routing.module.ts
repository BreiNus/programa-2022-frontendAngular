import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyContactoComponent } from './components/body-contacto/body-contacto.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyQuienSoyComponent } from './components/body-quien-soy/body-quien-soy.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ExpAcademicaComponent } from './components/exp-academica/exp-academica.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CrearExpAcademicaComponent } from './components/exp-academica/crear-exp-academica/crear-exp-academica.component';
import { CrearExpLaboralComponent } from './components/exp-laboral/crear-exp-laboral/crear-exp-laboral.component';
import { CrearPersonaComponent } from './components/persona/crear-persona/crear-persona.component';
import { CrearProyectosComponent } from './components/proyectos/crear-proyectos/crear-proyectos.component';
import { CrearSkillsComponent } from './components/skills/crear-skills/crear-skills.component';
import { EditarExpAcademicaComponent } from './components/exp-academica/editar-exp-academica/editar-exp-academica.component';
import { EditarExpLaboralComponent } from './components/exp-laboral/editar-exp-laboral/editar-exp-laboral.component';
import { EditarPersonaComponent } from './components/persona/editar-persona/editar-persona.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { EditarSkillsComponent } from './components/skills/editar-skills/editar-skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyHomeComponent },
  { path: 'quiensoy', component: BodyQuienSoyComponent },
  { path: 'contacto', component: BodyContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ver-persona', component: PersonaComponent },
  { path: 'ver-estudios', component: ExpAcademicaComponent },
  { path: 'ver-trabajos', component: ExpLaboralComponent },
  { path: 'ver-proyectos', component: ProyectosComponent },
  { path: 'ver-skills', component: SkillsComponent },
  { path: 'crear-persona', component: CrearPersonaComponent },
  { path: 'crear-estudio', component: CrearExpAcademicaComponent },
  { path: 'crear-trabajo', component: CrearExpLaboralComponent },
  { path: 'crear-proyecto', component: CrearProyectosComponent },
  { path: 'crear-skill', component: CrearSkillsComponent },
  { path: 'editar-persona/:id', component: EditarPersonaComponent },
  { path: 'editar-estudio/:id', component: EditarExpAcademicaComponent },
  { path: 'editar-trabajo/:id', component: EditarExpLaboralComponent },
  { path: 'editar-proyecto/:id', component: EditarProyectosComponent },
  { path: 'editar-skill/:id', component: EditarSkillsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
