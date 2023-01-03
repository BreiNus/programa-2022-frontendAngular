import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyContactoComponent } from './components/body-contacto/body-contacto.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import {BodyQuienSoyComponent} from './components/body-quien-soy/body-quien-soy.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
{path: '', redirectTo:'/home', pathMatch: 'full' },
{path: 'home', component: BodyHomeComponent},
{path: 'quiensoy', component: BodyQuienSoyComponent},
{path: 'contacto', component: BodyContactoComponent},
{path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
