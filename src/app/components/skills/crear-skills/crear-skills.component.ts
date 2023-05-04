import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/models/skills'

@Component({
  selector: 'app-crear-skills',
  templateUrl: './crear-skills.component.html',
  styleUrls: ['./crear-skills.component.css']
})
export class CrearSkillsComponent implements OnInit {


  nombreSkill: string = '';
  porcentajeSkill!: number;
  colorSkill: string = '';

  constructor(
    public dialogRef: MatDialogRef<CrearSkillsComponent>,
    private service: SkillsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombreSkill, this.porcentajeSkill, this.colorSkill);
    this.service.create(skill).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open(`Skill creado correctamente`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this.snackBar.open(`Error al crear skill: ${error.error.mensaje}`, 'Cerrar', {
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

