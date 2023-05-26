import { Component } from '@angular/core';

@Component({
  selector: 'app-mispublicaciones',
  templateUrl: './mispublicaciones.component.html',
  styleUrls: ['./mispublicaciones.component.css']
})
export class MispublicacionesComponent {
  publicaciones: any[] = [
    {
      titulo: 'Publicación 1',
      descripcion: 'Descripción de la publicación 1',
    },
    {
      titulo: 'Publicación 2',
      descripcion: 'Descripción de la publicación 2',
    },

  ];
  publicacionSeleccionada: any;
  modalVisible: boolean = false;

  abrirModal(publicacion: any) {
    this.publicacionSeleccionada = publicacion;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  mostrarRangosEdad() {
    const edadSeleccionada = this.publicacionSeleccionada.edad;

    // Reiniciar los valores de los checkbox
    this.publicacionSeleccionada.checkbox1 = false;
    this.publicacionSeleccionada.checkbox2 = false;
    this.publicacionSeleccionada.checkbox3 = false;

    // Lógica para mostrar/ocultar los checkbox según la edad seleccionada
    if (edadSeleccionada === '16-30') {
      // Mostrar el checkbox 1
      this.publicacionSeleccionada.mostrarCheckbox1 = true;
    } else {
      // Ocultar el checkbox 1
      this.publicacionSeleccionada.mostrarCheckbox1 = false;
    }

    if (edadSeleccionada === '31-60') {
      // Mostrar el checkbox 2
      this.publicacionSeleccionada.mostrarCheckbox2 = true;
    } else {
      // Ocultar el checkbox 2
      this.publicacionSeleccionada.mostrarCheckbox2 = false;
    }

    if (edadSeleccionada === '61+') {
      // Mostrar el checkbox 3
      this.publicacionSeleccionada.mostrarCheckbox3 = true;
    } else {
      // Ocultar el checkbox 3
      this.publicacionSeleccionada.mostrarCheckbox3 = false;
    }
  }

}
