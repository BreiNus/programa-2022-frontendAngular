import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url=''
currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  //metodo para iniciar sesion 
  //lo especificamos como un observable para que los controladores puedan subcribirse
  IniciarSesion(credenciales:any):Observable<any> {
    //aca adentro hacemos la llamada  a la api y la retornamos al controlador
    //el metodo pipe() encadena eperadores en este caso map()
    return this.http.post(this.url,credenciales).pipe(map(data => {
      //el storage no es mas que un objeto que nos permite almacenar los datos de manera local en el navegador 
      //y sin necesidad de realizar ninguna coneccion a la DB
      //este objeto provee dos propiedades el localStorage (que alamacena los datos de forma indefinida o hasta que se limpia el chache del navegador)
      //y el sessionStorage (almacena los datos mientras la ventana del navegador este abierta, cuando se cierra se borran los datos)
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      return data;
    }))
  }
}
