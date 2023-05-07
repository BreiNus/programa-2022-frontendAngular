import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpLaboral } from '../models/exp-laboral';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExpLaboralService {
  expLaboralURL = environment.expLaboralURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<ExpLaboral[]> {
    return this.httpClient.get<ExpLaboral[]>(this.expLaboralURL + 'ver');
  }

  public detail(id: number): Observable<ExpLaboral> {
    return this.httpClient.get<ExpLaboral>(
      this.expLaboralURL + `detalle/${id}`
    );
  }

  public create(expLaboral: ExpLaboral): Observable<any> {
    return this.httpClient.post<any>(this.expLaboralURL + 'crear', expLaboral);
  }

  public update(id: number, expLaboral: ExpLaboral): Observable<any> {
    return this.httpClient.put<any>(
      this.expLaboralURL + `editar/${id}`,
      expLaboral
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expLaboralURL + `borrar/${id}`);
  }
}
