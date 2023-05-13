import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css'],
})
export class EditarProyectosComponent implements OnInit {

  proyectos: Proyectos = new Proyectos("", "", "", "");

  constructor(
    private service: ProyectosService,
    public dialogRef: MatDialogRef<EditarProyectosComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.service.detail(this.data.id).subscribe({
      next: data => {
        this.proyectos = data;
      },
      error: error => {
        this.snackBar.open(`Error al cargar el proyecto: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      }
    })
  }

  onUpdate(id: any): void {
    this.service.update(id, this.proyectos).subscribe({
      next: data => {
        this.dialogRef.close();
        this.snackBar.open('Proyecto actualizado', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      },
      error: error => {
        this.snackBar.open(`Error al actualizar proyecto: ${error.error.mensaje}`, 'Cerrar', {
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
