import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   }

   public getRecomendaciones(id: number){
    return this.http.get('http://localhost:8080/eventosol/rec/'+id);
   }
}
