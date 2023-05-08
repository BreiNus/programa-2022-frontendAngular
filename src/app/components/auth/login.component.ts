import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  //loginUsuario es un objeto de la clase LoginUsuario
  logginUsuario!: LoginUsuario;
  //valores que lo voy a pasar al loginUsuario cuando realice el login
  nombreUsuario!: string;
  password!: string;
  //variable para mensaje de err
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    //este es para que en el momento que hagamos el login que nos rediriga
    private router: Router,
    private toastr: ToastrService
  ) { }

  //metodo al iniciar
  ngOnInit(): void {

  }

  //metodo al loguearse
  onLogin(): void {
    //inicializar el loginUsuario
    this.logginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    //cuando lo tenemos se lo mandamos al authService
    this.authService.login(this.logginUsuario).subscribe({
      next:
        //hacemos un callback
        (data) => {
          //parametros que necesita el JwtDto para que se almacene en el sessionStorage estos datos
          this.tokenService.setToken(data.token);
          //cuando se loguea lo redirecciona al index
          this.router.navigate(['/home']);
        },
      error:
        //en caso de error
        (err) => {
          //este .mensaje es el que tenemos en el backend en authController en el PostMapping /login (que dice "campos mal puestos")
          this.errMsj = err.error.message;
          this.toastr.error(this.errMsj, 'Fallo en el Login', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          //lo imprimimos por consola
          //console.log(err.error.message);
        }
    });
  }
}
