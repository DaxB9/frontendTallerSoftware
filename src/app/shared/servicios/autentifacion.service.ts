import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentifacionService {

  private ingresar:boolean = false;

  constructor() { }


  public  ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'taller' && obj.password=='taller';
      return this.ingresar;
  }

  public habilitarlogeo(){
    return this.ingresar;
  }


  public getAutenticationByToken(){
    return sessionStorage.getItem("token");
  }

  public limpiarToken(){
    return sessionStorage.setItem("token",'');
  }
}
