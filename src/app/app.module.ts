import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyQuienSoyComponent } from './components/body-quien-soy/body-quien-soy.component';
import { BodyContactoComponent } from './components/body-contacto/body-contacto.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyQuienSoyComponent,
    BodyContactoComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
