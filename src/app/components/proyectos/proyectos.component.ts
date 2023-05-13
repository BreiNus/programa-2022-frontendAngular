import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CrearProyectosComponent } from './crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './editar-proyectos/editar-proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  /*
  mihome: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.mihome = data;
    });
  }
  */
  proyectos!: Proyectos[];
  isAdmin = false;

  constructor(
    private service: ProyectosService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }



  ngOnInit(): void {
    this.cargarProyectos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProyectos(): void {
    this.service.list().subscribe((data) => {
      this.proyectos = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe({
        next: data => {
          this.cargarProyectos();

          this.snackBar.open('Proyecto eliminado', 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom'
          });

        },
        error: error => {
          this.snackBar.open(`Error al eliminar proyecto: ${error.error.mensaje}`, 'Cerrar', {
            duration: 2000,
            verticalPosition: 'bottom'
          });
        }
      });
    }
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(CrearProyectosComponent, {
      width: '500px',
      data: 'rigth click',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cargarProyectos();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditarProyectosComponent, {
      width: '500px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cargarProyectos();
    });
  }
}
