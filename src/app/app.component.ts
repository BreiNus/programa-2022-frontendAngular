import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioFrontendAngular';
  //funcion para poder iniciar el AOS en vez de poner el script directamente en el HTML
  ngOnInit():void {
    AOS.init();
  }
}