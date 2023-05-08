import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpAcademica } from 'src/app/models/exp-academica';
import { ExpAcademicaService } from 'src/app/servicios/exp-academica.service';

@Component({
  selector: 'app-editar-exp-academica',
  templateUrl: './editar-exp-academica.component.html',
  styleUrls: ['./editar-exp-academica.component.css']
})
export class EditarExpAcademicaComponent implements OnInit {
  expAca: ExpAcademica = new ExpAcademica("", "", "", "", "", "");

  constructor(
    private expAcaService: ExpAcademicaService,
    public dialogRef: MatDialogRef<EditarExpAcademicaComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.expAcaService.detail(this.data.id).subscribe({
      next: data => {
        this.expAca = data;
      },
      error: error => {
        this.snackbar.open(`Error al cargar la experiencia academica: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      }
    })
  }

  onUpdate(id: any): void {
    this.expAcaService.update(id, this.expAca).subscribe({
      next: data => {
        this.dialogRef.close();
        this.snackbar.open('Experiencia academica actualizada', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      },
      error: error => {
        this.snackbar.open(`Error al actualizar la experiencia academica: ${error.error.mensaje}`, 'Cerrar', {
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
