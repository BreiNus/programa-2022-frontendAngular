import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/models/persona';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarPersonaComponent } from '../persona/editar-persona/editar-persona.component';

@Component({
  selector: 'app-body-contacto',
  templateUrl: './body-contacto.component.html',
  styleUrls: ['./body-contacto.component.css'],
})
export class BodyContactoComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", 0, "", "",);
  roles!: string[];

  constructor(
    public navBarService: NavBarService,
    public service: PersonaService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.service.getPersona().subscribe(data => {
      this.persona = data
      this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
    }, error => {
      this._snackBar.open(`Error al cargar la información: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(EditarPersonaComponent, {
      width: '500px',
      data: this.persona
    });

    dialogRef.afterClosed().subscribe(result => {
      this.service.getPersona().subscribe(data => {
        this.persona = data
        this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
      })

      this.navBarService.NavBarAtualizar.emit();
    });
  }
}
