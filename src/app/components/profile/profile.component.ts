import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  rows: string[][] = [];
  selected: boolean[][] = [];
  dialog: any;

  constructor() {
    this.rows = [
      ['Opción 1', 'Opción 2', 'Opción 3'],
      ['Opción 4', 'Opción 5', 'Opción 6'],
      // ...
    ];

    this.selected = this.rows.map(row => Array(row.length).fill(false));


  }

  onCheckboxChange(rowIdx: number, optionIdx: number) {
    this.selected[rowIdx][optionIdx] = !this.selected[rowIdx][optionIdx];
  }
  submitOptions() {
    // Aquí puedes realizar las acciones necesarias con las opciones seleccionadas
    console.log(this.selected);
  }




  opcionPadre!: string;
  opcionPadres: string[] = ['Ingenierias', 'Ciencias Economicas', 'Ciencias Sociales', 'Diseño y Comunicacion Visual', 'Ciencias Politicas'];

  opcionHijo!: string;
  opcionesHijo: string[] = [];

  onSeleccionarOpcionPadre() {
    if (this.opcionPadre === 'Ingenierias') {
      this.opcionesHijo = ['Ingenieira Ambiental', 'Ingenieira Biomedica', 'Ingenieira Bioquimica y Bioporcesos',
                           'Ingenieria Civil', 'Ingenieira en Energia', 'ingenieria en Logistica y analisis de cadenas de suministros',
                           'Ingenieria en multimedia e interactividad Digital', 'Ingenieria Industrial',
                           'Ingenieira Quimica', 'Ingenieria Mecatronica','Ingenieria en Sistemas', 'Ingenieria en Telecomunicaciones'
                          ];
    }  else if (this.opcionPadre === 'Ciencias Economicas') {
      this.opcionesHijo = ['Opción D', 'Opción E', 'Opción F'];
    } else if(this.opcionPadre == 'Ciencias Sociales'){
      this.opcionesHijo = ['Opción G', 'Opción H', 'Opción I'];
    }
    else if(this.opcionPadre == 'Diseño y Comunicacion Visua'){
      this.opcionesHijo = ['Opción J', 'Opción K', 'Opción L'];
    }
    else if(this.opcionPadre == 'Ciencias Politicas'){
      this.opcionesHijo = ['Opción M', 'Opción N', 'Opción O'];
    }
    else {
      this.opcionesHijo = [];
    }

    // Restablecer la opción seleccionada en el combo box hijo
    this.opcionHijo = '';

  }
  //opcion hija



  onSeleccionarOpcionHijo() {
    console.log('Opción seleccionada:', this.opcionHijo);
  }
}
