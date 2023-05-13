import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpAcademica } from 'src/app/models/exp-academica';
import { ExpAcademicaService } from 'src/app/servicios/exp-academica.service';

@Component({
  selector: 'app-crear-exp-academica',
  templateUrl: './crear-exp-academica.component.html',
  styleUrls: ['./crear-exp-academica.component.css']
})
export class CrearExpAcademicaComponent implements OnInit {
  nombreExpAcademica: string = '';
  descripcionExpAcademica: string = '';
  nivel: string = '';
  lugar: string = '';
  inicioEstudio: string = '';
  finEstudio: string = '';

  constructor(
    public dialogRef: MatDialogRef<CrearExpAcademicaComponent>,
    private expAcaService: ExpAcademicaService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expAca = new ExpAcademica(this.nombreExpAcademica, this.descripcionExpAcademica, this.nivel, this.lugar, this.inicioEstudio, this.finEstudio);
    this.expAcaService.create(expAca).subscribe({
      next: data => {
        this.dialogRef.close();
        this.snackBar.open('Expeciencia academica creada', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      },
      error: error => {
        this.snackBar.open(`Error al crear la experiencia academica: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


