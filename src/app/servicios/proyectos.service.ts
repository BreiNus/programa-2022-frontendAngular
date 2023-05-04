import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  urlProyectos = 'http://localhost:8080/proyectos/';
  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.urlProyectos + 'ver');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.urlProyectos + `detalle/${id}`);
  }

  public create(proyecto: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.urlProyectos + 'crear', proyecto);
  }

  public update(id: number, proyecto: Proyectos): Observable<any> {
    return this.httpClient.put<any>(
      this.urlProyectos + `editar/${id}`,
      proyecto
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlProyectos + `borrar/${id}`);
  }
}
