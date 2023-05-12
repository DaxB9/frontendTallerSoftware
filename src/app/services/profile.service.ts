import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    
  constructor(private http:HttpClient) {
    console.log('Servicio HTTP:');
   }

    public GetProfileById(id: number){
        return this.http.get('http://localhost:8080/v1/usuarios/'+id);
    }
    public GetSubInteresesById(id: number){
        return this.http.get('http://localhost:8080/v1/usuarios/subintereses/'+id);
    }
}