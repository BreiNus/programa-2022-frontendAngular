import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  //Dos metodos, el primero para nuevoUsuario y el segundo para el login
  //este devuelve any porque en el backend en AuthController el PostMapping /nuevo su ResponseEntity devuelve un objeto de tipo generico <?>
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }
  //este devuelve un JwtDto porque en el backend en AuthController el PostMapping /login su ResponseEntity devuelve un objeto de tipo JwtDto <JwtDto>
  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
