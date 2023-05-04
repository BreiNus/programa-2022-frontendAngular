import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css'],
})
export class CrearProyectosComponent implements OnInit {
  nombreProyecto: string = '';
  urlRepo: string = '';
  imgProyecto: string = '';
  descripcionProyecto: string = '';

  constructor(
    public dialogRef: MatDialogRef<CrearProyectosComponent>,
    private service: ProyectosService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

  onCreate(): void {
    const proyectos = new Proyectos(
      this.nombreProyecto,
      this.urlRepo,
      this.imgProyecto,
      this.descripcionProyecto
    );
    this.service.create(proyectos).subscribe(
      (data) => {
        this.dialogRef.close();
        this.snackbar.open('Proyecto creado', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
      },
      (error) => {
        this.snackbar.open(
          `Error al crear proyecto: ${error.error.mensaje}`,
          'Cerrar',
          {
            duration: 2000,
            verticalPosition: 'bottom',
          }
        );
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
