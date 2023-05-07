import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {

  personaURL = environment.personaURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'ver');
  }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + 'ver-persona');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detalle/${id}`);
  }

  public create(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + 'crear', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `editar/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `borrar/${id}`);
  }
}
