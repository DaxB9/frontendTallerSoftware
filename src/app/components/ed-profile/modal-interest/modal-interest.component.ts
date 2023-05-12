import { Component, OnInit} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ModalSubinteresesComponent } from './modal-subintereses/modal-subintereses.component';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{
  interests: Category[] = [];
  

  constructor(private matDialog:MatDialog,private CategoryService: CategoryService){}
  openSubEdit(){
    this.matDialog.open(ModalSubinteresesComponent);
  }

  intereses:Array<any> | undefined

  // constructor(private CategoryService: CategoryService){}


  ngOnInit(): void {
    this.getInterests();
  }

  getInterests(){
    this.CategoryService.getCategory().subscribe(
      (interests) => { this.interests = interests; }
    );
  }

}
