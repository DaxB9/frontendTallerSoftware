import { Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subCategory';

@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{
  interests: Category[] = [];
  subInterests: SubCategory[] = [];

  constructor(private CategoryService: CategoryService){}

  ngOnInit(): void {
    this.getInterests();
    
  }

  getInterests(){
    this.CategoryService.getCategory().subscribe(
      (interests) => { this.interests = interests; console.log(this.interests)}
    );
  }
}
