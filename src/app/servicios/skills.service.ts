import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  urlSkills = 'http://localhost:8080/skills/';
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.urlSkills + 'ver');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.urlSkills + `detalle/${id}`);
  }

  public create(skill: Skills): Observable<any> {
    return this.httpClient.post<any>(this.urlSkills + 'crear', skill);
  }

  public update(id: number, skill: Skills): Observable<any> {
    return this.httpClient.put<any>(this.urlSkills + `editar/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlSkills + `borrar/${id}`);
  }
}
