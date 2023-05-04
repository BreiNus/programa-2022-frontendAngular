import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpAcademica } from '../models/exp-academica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpAcademicaService {
  expAcademicaURL = 'http://localhost:8080/estudios/';

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<ExpAcademica[]> {
    return this.httpClient.get<ExpAcademica[]>(this.expAcademicaURL + 'ver');
  }

  public detail(id: number): Observable<ExpAcademica> {
    return this.httpClient.get<ExpAcademica>(
      this.expAcademicaURL + `detalle/${id}`
    );
  }

  public create(expAcademica: ExpAcademica): Observable<any> {
    return this.httpClient.post<any>(
      this.expAcademicaURL + 'crear',
      expAcademica
    );
  }

  public update(id: number, expAcademica: ExpAcademica): Observable<any> {
    return this.httpClient.put<any>(
      this.expAcademicaURL + `editar/${id}`,
      expAcademica
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expAcademicaURL + `borrar/${id}`);
  }
}
