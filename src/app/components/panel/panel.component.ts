import { PanelService } from 'src/app/services/panel.service';
import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
//import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { bottom } from '@popperjs/core';


interface Solicitud {
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  // referencia: 'Ver detalles de la publicacion';
  referencia: string;
  estados: 'Rechazado' | 'Aprobado' | 'Pendiente' | 'Enviado';
}


interface Detalle{
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  estado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado';
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',

  styleUrls: ['./panel.component.css'],
  // template: `
  //   <button class="btn-view-Detail" (click)="openPopup()">Ver Detalle</button>
  // `


})
export class PanelComponent implements OnInit{



  

  // openPopup() {
  //   const dialogRef = this.dialog.open(Component);
  // }
  constructor(private panelService: PanelService, private dialog2: Dialog){
    console.log('El componente se a creado');
  }

  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      this.panelService.GetSolicitud()
      .subscribe(Response => {
        this.solicitudes = Response
        console.log(this.solicitudes)
     });
  }

  solicitudes: any = [];

  cambiarEstado(solicitud: Detalle, nuevoEstado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado') {
    solicitud.estado = nuevoEstado;
  }


  verDetalle(solicitud: Solicitud, verDetalle:'Ver Detalle '){
    solicitud.referencia = verDetalle;
  }
  obtenerFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }


  getEstadoClass(estado : String): String{

    switch (estado) {
      case '1':
        return 'estado-aprobado';
      case 'Rechazado':
        return 'estado-rechazado';
      case '2':
        return 'estado-pendiente';
      case  '0':
        return 'estado-enviado';
      default:
        return 'black';
    }
  }

  openDialog(solicitudId: bigint){
    const dialogRef = this.dialog2.open(ViewPostsComponent,{
      width: '50vw',
      height: '50vh',
      // maxHeight: '80vh', // Aquí estableces la altura máxima
      // overflowY: 'auto' // Agrega scroll cuando sea necesario
    });
    const instance = dialogRef.componentInstance
    if(instance){
      instance.solicitudId = solicitudId
      console.log(instance.solicitudId)
    } 
  }








}
