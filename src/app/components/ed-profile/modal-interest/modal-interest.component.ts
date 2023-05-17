import { Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{
  interests: Category[] = [];
  interestsUser:[]=[];

  aux:number=0 

  constructor(private CategoryService: CategoryService, private profileService: ProfileService){}

  ngOnInit(): void {
    this.GetSubInteresesByid(123465);
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

  /*Guardar(){
    this.interests.forEach(async (int) => {
      int.subIntereses.forEach(async (sub) => {

        if(sub.check){
          console.log(sub.nombre)
          console.log("actualizar")
          
        }
        
        

      });
    });
  }*/

}
