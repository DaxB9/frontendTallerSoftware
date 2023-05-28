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

  opcionSeleccionada!: string;
  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  onSeleccionarOpcion() {
    // Lógica a realizar cuando se selecciona una opción
    console.log('Opción seleccionada:', this.opcionSeleccionada);
  }


}

