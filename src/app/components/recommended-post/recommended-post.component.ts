import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.css']
})
export class RecommendedPostComponent implements OnInit{
  //Datos de prueba
  posts = [{idPost:1,image:"https://picsum.photos/200",title:"titulo post", description:"descripcion post", fecha: "01/01/2023"},
  {idPost:2,image:"https://picsum.photos/200",title:"titulo post2", description:"descripcion post2", fecha: "01/01/2023"},
  {idPost:3,image:"https://picsum.photos/200",title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"},
  {idPost:3,title:"titulo post3", description:"descripcion post3", fecha: "01/01/2023"}];
  public page!: number;

  constructor(){

  }

  ngOnInit(): void{

  }
}
