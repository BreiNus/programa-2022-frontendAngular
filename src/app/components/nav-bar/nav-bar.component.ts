import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", 0, "", "");

  isLogged = false;

  constructor(private tokenService: TokenService,
    public navBarService: NavBarService,
    public personaService: PersonaService,) { }

  //para mostar los botones del navBar si es que esta logueado o no
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.navBarService.NavBarAtualizar.subscribe(data => {
      this.personaService.getPersona().subscribe(data => this.persona = data);
    })
    this.personaService.getPersona().subscribe(data => this.persona = data);
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  //para desloguearse
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.replace('/login');
  }
}
