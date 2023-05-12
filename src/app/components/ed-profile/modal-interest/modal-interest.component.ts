import { Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
import { ModalSubinteresesComponent } from './modal-subintereses/modal-subintereses.component';
=======
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
>>>>>>> 40462756f3a9c224371a736eead76c3e13c0bb9d

@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{
  interests: Category[] = [];

<<<<<<< HEAD
  

  constructor(private matDialog:MatDialog){}
  openSubEdit(){
    this.matDialog.open(ModalSubinteresesComponent);
  }

  intereses:Array<any> | undefined
=======
  constructor(private CategoryService: CategoryService){}
>>>>>>> 40462756f3a9c224371a736eead76c3e13c0bb9d

  ngOnInit(): void {
    this.getInterests();
  }

  getInterests(){
    this.CategoryService.getCategory().subscribe(
      (interests) => { this.interests = interests; }
    );
  }

}
