import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpAcademica } from 'src/app/models/exp-academica';
import { ExpAcademicaService } from 'src/app/servicios/exp-academica.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CrearExpAcademicaComponent } from './crear-exp-academica/crear-exp-academica.component';
import { EditarExpAcademicaComponent } from './editar-exp-academica/editar-exp-academica.component';

@Component({
  selector: 'app-exp-academica',
  templateUrl: './exp-academica.component.html',
  styleUrls: ['./exp-academica.component.css']
})
export class ExpAcademicaComponent implements OnInit {
  expAcademica!: ExpAcademica[];
  isLogged = false;
  isAdmin = false;

  constructor(
    private expAcaService: ExpAcademicaService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }



  ngOnInit(): void {
    this.cargarExpAcademica();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarExpAcademica(): void {
    this.expAcaService.list().subscribe(data => {
      this.expAcademica = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.expAcaService.delete(id).subscribe({
        next: data => {
          this.cargarExpAcademica();

          this.snackBar.open('Experiencia academica eliminada', 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom'
          });

        },
        error: error => {
          this.snackBar.open(`Error al eliminar la experiencia academica: ${error.error.mensaje}`, 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom'
          });
        }
      });
    }
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(CrearExpAcademicaComponent, {
      width: '500px',
      data: 'rigth click'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarExpAcademica();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditarExpAcademicaComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarExpAcademica();
    });
  }
}