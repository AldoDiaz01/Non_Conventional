import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>Population: ${ data.population }</div>`
  }

  makeDenuesPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.nombre }</div>` +
      `<div>State: ${ data.calle }</div>` +
      `<div>Population: ${ data.municipio }</div>`
  }
}
