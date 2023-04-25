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
  selectedModality: string= "";
  selectedScope: string = "";

  category: Category[]=[];
  categoryaux: Category[]=[];
  publicoAux!:string;
  nevent: Event=new Event();
  lldata!: string;

  image!:any;
  file!:FileSend;
  cardImageBase64!: string;

  imageid!:string;
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
  addCategory(cat:Category){
    if(this.categoryaux.find(element => element == cat)){
      this.delCategory(cat);
    }else{
      this.categoryaux.push(cat);
    }
  }

  cambiaPublico(){
    this.publicoAux=this.selectedScope;
    //console.log(this.publicoAux);
  }
  addPublic(publico:string){
    if(this.publicoAux.includes(publico)){
      let aux= this.publicoAux.split('-'+publico);
      this.publicoAux=aux[0]+aux[1];
      //console.log(this.publicoAux);
    }else{
      this.publicoAux=this.publicoAux+'-'+publico;
      //console.log(this.publicoAux);
    }
  }
  delCategory(cat:Category){
    this.categoryaux=this.categoryaux.filter((item) => item !== cat);
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
