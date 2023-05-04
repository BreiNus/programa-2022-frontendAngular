import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //en realidad en vez de json tendriamos que poner una URL con la cual no vamos a comunicar y vamos a mandar un request y vamos a obtener los datos, pero este get va a devolver los datos de un json que creare
    return this.http.get('./assets/data/data.json');
  }
}
