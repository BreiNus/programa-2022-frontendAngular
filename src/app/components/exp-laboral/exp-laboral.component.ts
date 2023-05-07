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
  isLogged = false;
  isAdmin = false;

  constructor(
    private service: ExpLaboralService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.cargarExpLaboral();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarExpLaboral(): void {
    this.service.list().subscribe((data) => {
      this.expLaboral = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe({
        next:
          (data) => {
            this.cargarExpLaboral();

            this.snackbar.open('Experiencia laboral eliminada', 'Cerrar', {
              duration: 2000,
              verticalPosition: 'bottom',
            });
          },
        error: (error) => {
          this.snackbar.open(`Error al eliminar experiencia laboral: ${error.error.mensaje}`, 'Cerrar',
            { duration: 2000, verticalPosition: 'bottom', }
          );
        }
      });
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
