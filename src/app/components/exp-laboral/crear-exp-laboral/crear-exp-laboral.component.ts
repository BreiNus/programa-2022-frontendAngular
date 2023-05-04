import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpLaboralService } from 'src/app/servicios/exp-laboral.service';
import { ExpLaboral } from 'src/app/models/exp-laboral'

@Component({
  selector: 'app-crear-exp-laboral',
  templateUrl: './crear-exp-laboral.component.html',
  styleUrls: ['./crear-exp-laboral.component.css']
})
export class CrearExpLaboralComponent implements OnInit {
  nombreExpLaboral: string = '';
  nombreCompania: string = '';
  inicioTrabajo: string = '';
  finTrabajo: string = '';
  descripcionTrabajo: string = '';



  constructor(
    public dialogRef: MatDialogRef<CrearExpLaboralComponent>,
    private service: ExpLaboralService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expLab = new ExpLaboral(this.nombreExpLaboral, this.nombreCompania, this.inicioTrabajo, this.finTrabajo, this.descripcionTrabajo);
    this.service.create(expLab).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Experiencia Laboral creada', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    }, error => {
      this.snackbar.open(`Error al crear experiencia: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

