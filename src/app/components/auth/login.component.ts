import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //variable si estamos logueados
  isLogged = false;
  //variable por si hay un error en el login, para mostrar el mensaje por pantalla
  isLoginFail = false;

  //loginUsuario es un objeto de la clase LoginUsuario
  logginUsuario!: LoginUsuario;
  //valores que lo voy a pasar al loginUsuario cuando realice el login
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  //variable para mensaje de err
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    //este es para que en el momento que hagamos el login que nos rediriga
    private router: Router
  ) { }

  //metodo al iniciar
  ngOnInit(): void {
    //comprobar si estamos logueados
    if (this.tokenService.getToken()) {
      //si nos devuelve un token quiere decir que estamos logueados
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  //metodo al loguearse
  onLogin(): void {
    //inicializar el loginUsuario
    this.logginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    //cuando lo tenemos se lo mandamos al authService
    this.authService.login(this.logginUsuario).subscribe(
      //hacemos un callback
      (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        //parametros que necesita el JwtDto para que se almacene en el sessionStorage estos datos
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities); //con este se lo pasamos al navegador
        this.roles = data.authorities; //con este se lo pasamos a la variable roles
        //cuando se loguea lo redirecciona al index
        this.router.navigate(['/home']);
      },
      //en caso de error
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        //este .mensaje es el que tenemos en el backend en authController en el PostMapping /login (que dice "campos mal puestos")
        this.errMsj = err.error.message;
        //lo imprimimos por consola
        //console.log(err.error.message);
      }
    );
  }
}
