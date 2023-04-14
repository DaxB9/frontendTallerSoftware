
import { PreviewService } from 'src/app/services/preview.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NonNullableFormBuilder } from '@angular/forms';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css',

  ],
  styles: [` :host {
    display: block;
    background: #fff;
    border-radius: 4px;
    padding: 16px;
    width:50vw;
    height:33vw;

  }

  `]

})

export class ViewPostsComponent   implements OnInit{

  constructor(private previewService: PreviewService){
    console.log('El componente se a creado');
  }

  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      this.previewService.getById(this.solicitudId)
      .subscribe(Response => {
        this.preview = Response
     });
  }


  putEstado(id:bigint,estado:number){
    console.log(this.preview.solicitudId);
    this.previewService.putById(this.preview.solicitudId,this.preview.estado).subscribe({
      next:() => {
        console.log('paso');

      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');
  }


  @Input()
  solicitudId!:bigint;

  preview: any = []


  nameInCharge!: string;
  paternalSurname!: string;
  maternalSurname!: string;
  photo!:string;
  location!:string;
  date!:Date;

  titleEvent!:string;
  descriptionEvent!: string;

  onSubmit(): void {
    console.log('Formulario enviado');
    // console.log('Nombre:', this.nameInCharge);
    // console.log('Apellido Paterno:', this.paternalSurname);
    // console.log('Apellido Materno', this.maternalSurname);

  }
  // constructor(
  //   private dialogRef: DialogRef,
  // ){}

  // close(){
  //   this.dialogRef.close();

  // }

  aceptada(id:bigint){
    this.preview.solicitudId = id;
    this.preview.estado = 1;
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      icon: 'success',
      title: 'Publicación Aceptada',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }


    })
    this.putEstado(id,1);
  }
  rechazada(id:bigint){
    this.preview.solicitudId = id;
    this.preview.estado = 2;
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      icon: 'error',
      title: 'Publicación Rechazada',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }

    })
    this.putEstado(id,2);
  }

}
