import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpLaboral } from 'src/app/models/exp-laboral';
import { ExpLaboralService } from 'src/app/servicios/exp-laboral.service';

@Component({
  selector: 'app-editar-exp-laboral',
  templateUrl: './editar-exp-laboral.component.html',
  styleUrls: ['./editar-exp-laboral.component.css'],
})
export class EditarExpLaboralComponent implements OnInit {
  expLab: ExpLaboral = new ExpLaboral("", "", "", "", "");

  constructor(
    private expLabService: ExpLaboralService,
    public dialogRef: MatDialogRef<EditarExpLaboralComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.expLabService.detail(this.data.id).subscribe({
      next: data => {
        this.expLab = data;
      },
      error: error => {
        this.snackbar.open(`Error al cargar la experiencia laboral: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      }
    })
  }

  onUpdate(id: any): void {
    this.expLabService.update(id, this.expLab).subscribe({
      next: data => {
        this.dialogRef.close();
        this.snackbar.open('Experiencia laboral actualizada', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      },
      error: error => {
        this.snackbar.open(`Error al actualizar la experiencia laboral: ${error.error.mensaje}`, 'Cerrar', {
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
