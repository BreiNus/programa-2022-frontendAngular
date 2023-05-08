import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {
  skills: Skills = new Skills("", 0, "");

  constructor(
    private service: SkillsService,
    public dialogRef: MatDialogRef<EditarSkillsComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.service.detail(this.data.id).subscribe(data => {
      this.skills = data;
    }, error => {
      this._snackBar.open(`Error al cargar skill: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
  }

  onUpdate(id: any): void {
    this.service.update(id, this.skills).subscribe(data => {
      this.dialogRef.close();
      this._snackBar.open(`Skills actualizado correctamente`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this._snackBar.open(`Error al actualizar skill: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatLabel(value: number) {
    return value + '%';
  }
}
