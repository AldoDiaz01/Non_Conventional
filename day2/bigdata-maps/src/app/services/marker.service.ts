import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from '../services/pop-up.service';
import { DataApiService } from '../services/data-api.service';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient,
    private popupService: PopUpService,
    private dataApiService: DataApiService) { }

    makeDenuesMarkers(map: L.map, idestado, idmunicipio, actividad): void {
   
      this.dataApiService.getDenues(idestado, idmunicipio, actividad).subscribe((res: any) => {
        for (const c of res) {
          const lat = parseFloat(c.lat);
          const lon = parseFloat(c.lng);
          const marker = L.marker([lat, lon],
            {
              icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/'+ actividad  + '.png',
              shadowUrl: 'assets/marker-shadow.png'
              })
            }); 

          marker.bindPopup(this.popupService.makeDenuesPopup(c));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }

  makeCapitalMarkers(map: L.map): void {
  
          this.http.get(this.capitals).subscribe((res: any) => {
        for (const c of res.features) {
          const lat = c.geometry.coordinates[0];
          const lon = c.geometry.coordinates[1];
          const marker = L.marker([lon, lat]);

          marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }
}
