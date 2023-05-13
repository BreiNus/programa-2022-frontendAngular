import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona: Persona = new Persona('', '', '', '', 0, '', '');

  constructor(
    private service: PersonaService,
    public dialogRef: MatDialogRef<EditarPersonaComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.service.detail(this.data.id).subscribe({
      next:
        (data) => {
          this.persona = data;
        },
      error: (error) => {
        this.snackBar.open(
          `Error al cargar los datos de la persona: ${error.error.mensaje}`,
          'Cerrar',
          {
            duration: 6000,
            verticalPosition: 'bottom',
          }
        );
      }

    });
  }

  onUpdate(id: any): void {
    this.service.update(id, this.persona).subscribe({
      next:
        (data) => {
          this.dialogRef.close();
          this.snackBar.open('"Acerca de" actualizada', 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom',
          });
        },
      error: (error) => {
        this.snackBar.open(
          `Error al actualizar "Acerca de": ${error.error.mensaje}`,
          'Cerrar',
          {
            duration: 2000,
            verticalPosition: 'bottom',
          }
        );
      }

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

