import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ed-profile',
  templateUrl: './ed-profile.component.html',
  styleUrls: ['./ed-profile.component.css']
})
export class EdProfileComponent {
  correo: string= "ejemplo@gmail.com"
  nombres: string= "Pedro"
  apellidos: string= "Perez Perez"
  genero:string= "hombre"
  nacimiento: string= "01-01-2023"
  carrera: string = "Ingenieria de Sistemas"
  zona: string = "Obrajes"
  direccion: string = " Calle 2 Nro 1"
  telefono: string = "77788999"
  correoPersonal: string ="personal@gmail.com"
}
