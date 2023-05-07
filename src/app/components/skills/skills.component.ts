import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CrearSkillsComponent } from './crear-skills/crear-skills.component';
import { EditarSkillsComponent } from './editar-skills/editar-skills.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills!: Skills[];
  isLogged = false;
  isAdmin = false;

  constructor(
    private service: SkillsService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.listSkills();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
    this.isAdmin = this.tokenService.isAdmin();
  }

  listSkills(): void {
    this.service.list().subscribe(data => {
      this.skills = data;
    });
  }


  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe(data => {
        this.listSkills();

        this._snackBar.open('Skill eliminada', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });

      }, error => {
        this._snackBar.open(`Error al eliminar skill: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      });
    }
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(CrearSkillsComponent, {
      width: '500px',
      data: 'rigth click'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listSkills();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditarSkillsComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listSkills();
    });
  }

}
