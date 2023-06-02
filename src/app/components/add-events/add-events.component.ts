import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from'sweetalert2';
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event";
import {FileSend} from "../../models/file";



@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  titulo: string = "";
  subtitulo: string = "";
  descripcion: string = "";
  selectedModality: string= "";
  selectedScope: string = "";

  category: Category[]=[];
  categoryaux: Category[]=[];

  categoryaux2: any[]=[];
  publicoAux2: string[]=["",""];
  publicoAux!:string;
  nevent: Event=new Event();
  lldata!: string;

  image!:any;
  file!:FileSend;
  cardImageBase64!: string;

  imageid!:string;

  checkbox1: boolean =false;
  checkbox2: boolean =false;
  checkbox3: boolean =false;
  checkbox4: boolean =false;
  checkbox5: boolean =false;
  checkbox6: boolean =false;
  checkbox7: boolean =false;

  constructor(private categoryService:CategoryService, private eventService:EventService){}

  public newEventForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    descriptionPost: new FormControl('', Validators.required),
    //modality: new FormControl('', Validators.required),
    //scope: new FormControl('', Validators.required),
    linklugar: new FormControl('', Validators.required),
  });

  async addNewEvent(data: any){
    if(this.newEventForm.valid){
      this.successNotification()
    }else{
      this.wrongNotification("Llene todos los campos");
    }
    const title = this.newEventForm.get('titlePost')?.value;
  const description = this.newEventForm.get('descriptionPost')?.value;

  };
  ngOnInit(): void {
    this.getCategory();
  }

  imagenmod(event:any){
    console.log(event.target.files[0]);
    this.image=event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          // this.previewImagePath = imgBase64Path;
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  getCategory(){
    console.log('Categorys');
    this.categoryService.getCategory().subscribe(
      data => {
        this.category = data;
        // make a loop
        console.log('data');
        console.log(this.category);
      },
        error => {
          console.log(error);
        });
  }
  printcategoryaus(){
    console.log(this.categoryaux);
  }
  addCategory(cat:any){
    if(this.categoryaux2.find(element => element == cat)){
      this.delCategory(cat);
    }else{
      this.categoryaux2.push(cat);
    }
    console.log('Data: ',this.categoryaux2)
  }

  cambiaPublico(){
    this.publicoAux=this.selectedScope;
    //console.log(this.publicoAux);
  }
<<<<<<< HEAD
  addPublic(publico:string, checkNumber: number){
    this.invalidateCheckbox(checkNumber);
    if(this.publicoAux.includes(publico)){
      let aux= this.publicoAux.split('-'+publico);
      this.publicoAux=aux[0]+aux[1];
      //console.log(this.publicoAux);
=======
  addPublic(publico:string){
    if(this.publicoAux2[0].includes(publico)){
      let aux= this.publicoAux2[0].split('-'+publico);
      this.publicoAux2[0]=aux[0]+aux[1];
      console.log(this.publicoAux2);
      //this.publicoAux2[0]="";
>>>>>>> 034a5dbcec54e39da6ef1a935292f6bb16992743
    }else{
      this.publicoAux2[0]=this.publicoAux2[0]+'-'+publico;
      console.log(this.publicoAux2);
    }
  }
<<<<<<< HEAD
  invalidateCheckbox(checkNumber: number){
    /*this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.checkbox4 = false;
    this.checkbox5 = false;
    this.checkbox6 = false;
    this.checkbox7 = false;*/

    if (checkNumber === 1) {
      this.checkbox6 = false;
      this.checkbox7 = false;
    } else if (checkNumber === 3) {
      this.checkbox5 = false;
      this.checkbox6 = false;
    } else if (checkNumber === 5) {
      this.checkbox3 = false;
    } else if (checkNumber === 6) {
      this.checkbox1 = false;
    } else if (checkNumber === 7) {
      this.checkbox1 = false;
    }

  }
=======

  addPublic2(publico: string){
    if(this.publicoAux2[1].includes(publico)){
      let aux= this.publicoAux2[1].split('-'+publico);
      this.publicoAux2[1]=aux[0]+aux[1];
      console.log(this.publicoAux2);
      //this.publicoAux2[0]="";
    }else{
      this.publicoAux2[1]=this.publicoAux2[1]+'-'+publico;
      console.log(this.publicoAux2);
    }
  }

>>>>>>> 034a5dbcec54e39da6ef1a935292f6bb16992743
  delCategory(cat:any){
    this.categoryaux2=this.categoryaux2.filter((item) => item !== cat);
  }

  postEvent(titulo:string, descripcion:string, lldata:string){
    //this.testimagen();
    console.log(this.image);
    this.eventService.postImagen(this.image).subscribe(resp =>{
        console.log(resp);
        this.imageid=resp.id;
        console.log(this.imageid);
        //Nuevo evento
        this.nevent.ep_id=0;
        this.nevent.titulo=titulo;
        this.nevent.descripcion=descripcion;
        this.nevent.id_imagen=this.imageid;
        if (this.selectedModality==='Presencial'){
          this.nevent.lugar=lldata;
          this.nevent.link='';
        }else {
          this.nevent.lugar='';
          this.nevent.link=lldata;
        }
        //this.nevent.categoriaDTOS=this.category;
        this.nevent.interesesDTOS=this.categoryaux2;
        //this.nevent.categoriaDTOS=[]
        this.nevent.publico= (this.publicoAux2[0]+"/"+this.publicoAux2[1]);
        console.log('Categorias  seleccionadas en el push: ',this.nevent.interesesDTOS);
        console.log(this.nevent);
        this.eventService.postTarjeta(this.nevent).subscribe({
          next:(response) => {
            console.log('paso');
          },
          error:(errorResponse) => {
            console.log('error');
          }
        });
      },
      error => {
        console.log('error');
      });
    console.log('post exitoso');
/*
    this.nevent.ep_id=0;
    this.nevent.titulo=titulo;
    this.nevent.descripcion=descripcion;
    this.nevent.id_imagen=this.imageid;
    if (this.selectedModality==='Presencial'){
      this.nevent.lugar=lldata;
      this.nevent.link='';
    }else {
      this.nevent.lugar='';
      this.nevent.link=lldata;
    }
    //this.nevent.categoriaDTOS=this.category;
    this.nevent.interesesDTOS=this.categoryaux;
    //this.nevent.categoriaDTOS=[]
    this.nevent.publico=this.publicoAux;
    console.log('Categorias  seleccionadas en el push: ',this.nevent.interesesDTOS);
    console.log(this.nevent);
    this.eventService.postTarjeta(this.nevent).subscribe({
      next:(response) => {
        console.log('paso');
      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');
 */
  }

  testimagen(){
    console.log(this.image);
    //this.file.file=this.image;
    this.eventService.postImagen(this.image).subscribe(resp =>{
      console.log(resp);
      this.imageid=resp.id;
        console.log(this.imageid);
    },
      error => {
        console.log('error');
      });
    console.log('post exitoso');
  }

  wrongNotification(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: 'No se pudo registrar el evento',
      text: mensaje,
    })
  }
  successNotification(){
    Swal.fire({
      title: 'REGISTRO EXITOSO',
      text: 'La operacion se ha realizado completamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })
  }

}
