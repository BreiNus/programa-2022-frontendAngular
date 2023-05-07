import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  //nuevoUsuario es un objeto de la clase nuevoUsuario
  nuevoUsuario!: NuevoUsuario;
  //valores que lo voy a pasar al nuevoUsuario cuando realice el login
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  //variable para mensaje de err
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    //este es para que en el momento que hagamos el registro que nos rediriga
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
  }

  //metodo al registrarse
  onRegister(): void {
    //inicializar el loginUsuario
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    //cuando lo tenemos se lo mandamos al authService
    this.authService.nuevo(this.nuevoUsuario).subscribe({
      next:
        //hacemos un callback
        (data) => {
          this.toastr.success('Cuenta creada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/login']);
        },
      //en caso de error
      error: (err) => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fallo en el registro', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        //console.log(err.error.message);
      }
    });
  }

}
