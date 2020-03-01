import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Denues } from '../models/denues';
import { Estados } from '../models/estados';
import { Municipios } from '../models/municipios';
import { Unidades } from '../models/unidades';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

 

  apiURL = 'http://localhost:10010/api/';
  //apiURL = 'https://valid-decoder-258800.appspot.com/';
  
  
  constructor(
    private http: HttpClient,
  ) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'

    })
  }  

  
  getEstados(): Observable<Estados> {
    console.log("estados: " + this.apiURL);
    return this.http.get<Estados>(this.apiURL + 'entidades', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   



  getMunicipios(idestado): Observable<Municipios> {
    console.log("municipios: " + this.apiURL);
    return this.http.get<Municipios>(this.apiURL + 'municipios?entidad=' + idestado, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   


  getUnidades(): Observable<Unidades> {
    console.log("unidades: " + this.apiURL);
    return this.http.get<Unidades>(this.apiURL + 'bancos', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   


  getDenues(idestado, idmunicipio, tipo): Observable<Denues> {
    console.log("denues: " + this.apiURL + idestado);
    return this.http.get<Denues>(this.apiURL + 'denues?entidad=' + idestado +
    '&municipio=' + idmunicipio + '&tipo=' + tipo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
