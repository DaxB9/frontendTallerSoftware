import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8080/v1/intereses/mostrar');
  }

}
