import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpLaboral } from 'src/app/models/exp-laboral';
import { ExpLaboralService } from 'src/app/servicios/exp-laboral.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CrearExpLaboralComponent } from './crear-exp-laboral/crear-exp-laboral.component';
import { EditarExpLaboralComponent } from './editar-exp-laboral/editar-exp-laboral.component';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css'],
})
export class ExpLaboralComponent implements OnInit {
  expLaboral!: ExpLaboral[];
  roles!: string[];

  constructor(
    private service: ExpLaboralService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.cargarExpLaboral();
    this.tokenService.getToken()
      ? (this.isLogged = true)
      : (this.isLogged = false);
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  cargarExpLaboral(): void {
    this.service.list().subscribe((data) => {
      this.expLaboral = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe(
        (data) => {
          this.cargarExpLaboral();

          this.snackbar.open('Experiencia eliminada', 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom',
          });
        },
        (error) => {
          this.snackbar.open(
            `Error al eliminar experiencia: ${error.error.mensaje}`,
            'Cerrar',
            {
              duration: 2000,
              verticalPosition: 'bottom',
            }
          );
        }
      );
    }
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(CrearExpLaboralComponent, {
      width: '500px',
      data: 'rigth click',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cargarExpLaboral();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditarExpLaboralComponent, {
      width: '500px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cargarExpLaboral();
    });
  }
}
