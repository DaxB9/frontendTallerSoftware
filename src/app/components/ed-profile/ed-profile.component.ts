import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModalInterestComponent } from './modal-interest/modal-interest.component';
import Swal from'sweetalert2';
import { ProfileService } from 'src/app/services/profile.service';
import { Timestamp } from 'rxjs';
import { DataService } from 'src/app/core/data.service';


@Component({
  selector: 'app-ed-profile',
  templateUrl: './ed-profile.component.html',
  styleUrls: ['./ed-profile.component.css']
})
export class EdProfileComponent implements OnInit{
  // correo: string= "ejemplo@gmail.com"
  // nombres: string= "Pedro"
  // apellidos: string= "Perez Perez"
  // genero:string= "hombre"
  // nacimiento: string= "01-01-2023"
  // carrera: string = "Ingenieria de Sistemas"
  // zona: string = "Obrajes"
  // direccion: string = " Calle 2 Nro 1"
  // telefono: string = "77788999"
  // correoPersonal: string ="personal@gmail.com"

  constructor(private matDialog:MatDialog, private profile: ProfileService, private dataService: DataService){}

  profileId:number = 123465;

  datosPerfil: any = [];

  intereses:any = [];

  datos: any = [];
  data: any = [];
  objetounico:any = {};

  carreras:any=[];

  ngOnInit(): void{
    console.log('El componente se ha inicializado');
      this.profile.GetProfileById(this.profileId)
      .subscribe(Response => {
        let token = sessionStorage.getItem("token") as string;
        this.objetounico = this.decodificarJwt(token);
        console.log("mi objeto: ",this.objetounico);//información de cliente
        this.datosPerfil = this.objetounico;
     });

    /* this.dataService.getProfile().subscribe((data:any) => {
      this.datos = data;
      console.log(this.datos);
    });*/
     

     this.profile.GetSubInteresesById(this.profileId)
      .subscribe(Response => {
        this.intereses = Response
     });

     this.profile.GetMajors()
     .subscribe(Response => {
       this.carreras = Response
    });
  }

  

  openEdit(id:any){
    localStorage.setItem('idperfil',JSON.stringify(id))
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
  

    this.profile.postProfile(this.profileId,this.datosPerfil).subscribe({
      next:() => {
        console.log(this.datosPerfil);

      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');

    Swal.fire({
      title: 'Exito',
      text: 'Perfil actualizado correctamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })
  }
  private decodificarJwt(token:string):any
  {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  
}
