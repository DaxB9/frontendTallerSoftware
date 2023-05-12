import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModalInterestComponent } from './modal-interest/modal-interest.component';
import Swal from'sweetalert2';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-ed-profile',
  templateUrl: './ed-profile.component.html',
  styleUrls: ['./ed-profile.component.css']
})
export class EdProfileComponent implements OnInit{
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

  constructor(private matDialog:MatDialog, private profile: ProfileService){}

  profileId:number = 123465;

  datosPerfil: any = [];

  intereses:any = [];

  ngOnInit(): void{
    console.log('El componente se ha inicializado');
      this.profile.GetProfileById(this.profileId)
      .subscribe(Response => {
        this.datosPerfil = Response
     });
     

    //  this.profile.GetSubInteresesById(this.datosPerfil.userid)
    //   .subscribe(Response => {
    //     this.intereses = Response
    //  });
  }

  

  openEdit(){
    this.matDialog.open(ModalInterestComponent);
  }



  async confirmationPerfilUpdate(){
    Swal.fire({
      title: 'Confirmar Actualizacion',
      text: '¿Está seguro de modificar la informacion del usuario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        //await this.updateProfile(profile);

        this.successUpdateProfile();
      }
    })
  }

  successUpdateProfile(){
    Swal.fire({
      title: 'Exito',
      text: 'Perfil actualizado correctamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })
  }

  
}
