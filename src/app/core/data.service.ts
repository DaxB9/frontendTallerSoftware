import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  sendData(objetounico: any) {
    const url = 'http://localhost:8080/api/data';
    return this.http.post(url, objetounico);
  }
}
