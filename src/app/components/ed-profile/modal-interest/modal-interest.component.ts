import { Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ProfileService } from 'src/app/services/profile.service';
import { SubCategoryPost } from 'src/app/models/SubCategoryPost';
import { SubCategory } from 'src/app/models/subCategory';

@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{
  interests: Category[] = [];

  interestss= [{imagen:"https://picsum.photos/id/237/200/300",nombre_interes:"interes 1",subIntereses:[{nombre:"si1", check: true},{nombre:"si2", check: false}]},
  {imagen:"https://picsum.photos/id/237/200/300",nombre_interes:"interes 2",subIntereses:[{nombre:"si1", check: true},{nombre:"si2", check: false}]},
  {imagen:"https://picsum.photos/id/237/200/300",nombre_interes:"interes 3",subIntereses:[{nombre:"si1", check: true}]},
  {imagen:"https://picsum.photos/id/237/200/300",nombre_interes:"interes 3",subIntereses:[{nombre:"si1", check: true},{nombre:"si2", check: false}]}];


  interestsUser:[]=[];

  SubCategory2:SubCategoryPost=new SubCategoryPost();

  aux:number=0
  profileId:number = 123465;

  subcategorias: Array<any>=[];

  constructor(private CategoryService: CategoryService, private profileService: ProfileService){}

  ngOnInit(): void {
    this.GetSubInteresesByid(this.profileId);
    this.getInterests();
  }

  getInterests(){
    this.CategoryService.getCategory().subscribe(
      (interests) => {
        this.interests = interests;
        //console.log(this.interests);
        //console.log(interests.length);

        this.SelectUser();

    });
  }
  GetSubInteresesByid(id:number){
    this.profileService.GetSubInteresesById(id).subscribe(
      (interests) => { this.interestsUser = interests; console.log(this.interestsUser);}
    );
  }


  SelectUser(){
    this.interests.forEach(async (int) => {
      int.subIntereses.forEach(async (sub) => {
        sub.check=false
        this.interestsUser.forEach(async (subU:any) => {
          if(subU.nombre===sub.nombre){
            sub.check=true
          }
        });
      });
    });
    //console.log(this.interests)
  }

  onChange($event: any){
    this.interests.forEach(async (int) => {
      int.subIntereses.forEach(async (sub) => {
        if(sub.nombre===$event.target.id){
          sub.check=$event.target.checked
        }
      });
    });
  }

  Guardar(){
    this.interests.forEach(async (int) => {
      int.subIntereses.forEach(async (sub) => {

        if(sub.check){

          console.log(sub)
          console.log("actualizar")
          console.log()


          this.subcategorias.push(sub.id_subinteres);

        }

      });
    });
    this.SubCategory2.usuarioId=this.profileId;
    this.SubCategory2.subInteresId=this.subcategorias;

    this.CategoryService.postSubInteresrs(this.SubCategory2).subscribe({
      next:() => {
        console.log();

      },
      error:(errorResponse) => {
        console.log('error');
      }
    });
    console.log('post exitoso');
    window.location.reload();

  }

}
