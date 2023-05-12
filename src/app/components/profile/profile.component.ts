import { Component } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent {
  rows = [    ['Opción 1', 'Opción 2', 'Opción 3'],
  ['Opción 4', 'Opción 5', 'Opción 6'],
  ['Opción 7', 'Opción 8', 'Opción 9'],
  ['Opción 10', 'Opción 11', 'Opción 12'],
  ['Opción 13', 'Opción 14', 'Opción 15']
];
selected = [];


rowsSubinteres = [    ['Opción 1', 'Opción 2', 'Opción 3'],
  ['Opción 4', 'Opción 5', 'Opción 6'],
  ['Opción 7', 'Opción 8', 'Opción 9'],
  ['Opción 10', 'Opción 11', 'Opción 12'],
  ['Opción 13', 'Opción 14', 'Opción 15']
];
selectedSubInteres = [];

submitOptions() {
  console.log(this.selected);
}
}
