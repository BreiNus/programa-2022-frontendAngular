import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/models/persona';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarPersonaComponent } from 'src/app/components/persona/editar-persona/editar-persona.component'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", 0, "", "",);
  isLogged = false;
  isAdmin = false;

  constructor(
    public navBarService: NavBarService,
    public service: PersonaService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }



  ngOnInit(): void {
    this.service.getPersona().subscribe({
      next: data => {
        this.persona = data
        this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
      },
      error: error => {
        this._snackBar.open(`Error al cargar la información: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        })
      }
    })
    this.isAdmin = this.tokenService.isAdmin();
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
