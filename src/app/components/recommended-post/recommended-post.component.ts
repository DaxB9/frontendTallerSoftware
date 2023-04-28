import { RecommendedService } from 'src/app/services/recommended.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  template: '',
  styleUrls: ['./recommended-post.component.css']
})
export class RecommendedPostComponent implements OnInit{

  constructor(private recommended: RecommendedService){
    console.log('El componente se a creado');
  }


  solicitudId:number = 123465;

  ngOnInit(): void{
    console.log('El componente se ha inicializado');
      this.recommended.getRecomendaciones(this.solicitudId)
      .subscribe(Response => {
        this.posts = Response
     });
  }
  
  //Datos de prueba

  posts: any = [];

  // posts = [{idPost:1,image:"https://picsum.photos/200",title:"titulo post", description:"descripcion post", fecha: "01/01/2023"},
  // {idPost:2,image:"https://picsum.photos/200",title:"titulo post2", description:"descripcion post2", fecha: "01/01/2023"},
  // {idPost:3,image:"https://picsum.photos/200",title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"},
  // {idPost:3,title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"}];
   public page!: number;

  
   viewPost(id:any){

    localStorage.setItem('id',JSON.stringify(id))
   }
  
}
