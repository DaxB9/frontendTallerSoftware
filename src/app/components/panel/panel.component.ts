import { PanelService } from 'src/app/services/panel.service';
//import { BackendService } from './services/backend.service';
import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
//import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { bottom } from '@popperjs/core';
import { MatExpansionPanel } from '@angular/material/expansion';


// export class FilterComponent {
//   acceptar: boolean = false;
//   rechazar: boolean = false;

//   constructor(private backendService : BackendService) {}

//   updateFilter() {
//     this.backendService.updateFilter(this.acceptar, this.rechazar).subscribe();
//   }
// }
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
  id:bigint;
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
  public page!: number;
  audiencias: any = [];

  constructor(private panelService: PanelService, private dialog2: Dialog){
    console.log('El componente se a creado');
  }


  ngOnInit(): void {
      console.log('El componente se ha inicializado');
    this.sortTable('solicitudid');
      this.panelService.GetSolicitud()
      .subscribe(Response => {
        this.solicitudes = Response
        console.log(this.solicitudes)
     });

  }
  // Definir la propiedad 'sortDirection' en el componente
  sortColumn: string = 'solicitudid';
  sortDirection: string = 'asc';

// Función para cambiar la dirección del ordenamiento
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

// Función para ordenar la tabla por la columna especificada
  sortTable(column: string) {
    // Si se hace clic en la misma columna, cambiar la dirección del ordenamiento
    if (column === this.sortColumn) {
      this.toggleSortDirection();
    } else {
      // Si se hace clic en una columna diferente, ordenar en orden ascendente
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    // Ordenar la tabla utilizando la columna y la dirección del ordenamiento
    this.solicitudes = this.solicitudes.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const columnA = a[column];
      const columnB = b[column];

      if (columnA < columnB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (columnA > columnB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  solicitudes: any = [];
  cambiarEstado(solicitud: Detalle, nuevoEstado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado') {
    solicitud.estado = nuevoEstado;
  }
  verDetalle(solicitud: Solicitud, verDetalle:'Ver Detalle '){
    solicitud.referencia = verDetalle;
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

  obtenerFecha1(timestamp: Date): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  /*getAudiencia(id : bigint):any {
      this.panelService.GetAudiencia(id)
      .subscribe(Response => {
      this.solicitudes = Response
      console.log(this.solicitudes)
   });
  }*/

}

