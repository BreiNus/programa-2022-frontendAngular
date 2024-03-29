import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//esta constate se va a almacenar en el navegador, en la consola en la parte de local storage
const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor(
    private router: Router
  ) { }

  //getter y setter para el token, el nombre de usuario y para las authorities
  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) || '';
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }


  public getUserName(): string {
    if (!this.isLogged()) {
      return '';
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = window.atob(payload);
    const value = JSON.parse(payloadDecoded);
    const username = value.sub;
    return username;
  }


  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = window.atob(payload);
    const value = JSON.parse(payloadDecoded);
    const roles = value.roles;
    if (roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }
    return true;
  }

  //cerrar sesion
  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
