import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-interest',
  templateUrl: './modal-interest.component.html',
  styleUrls: ['./modal-interest.component.css']
})
export class ModalInterestComponent implements OnInit{

  intereses:Array<any> | undefined

  ngOnInit(): void {
    this.intereses=[
      {
        title: "Interes 1",
        image: "https://picsum.photos/200/100"
      },
      {
        title: 'Interes 2',
        image: "https://picsum.photos/200/101"
      },
      {
        title: 'Interes 3',
        image: "https://picsum.photos/200/102"
      },
      {
        title: 'Interes 4',
        image: "https://picsum.photos/200/103"
      },
      {
        title: "Interes 1",
        image: "https://picsum.photos/200/100"
      },
      {
        title: 'Interes 2',
        image: "https://picsum.photos/200/101"
      },
      {
        title: 'Interes 3',
        image: "https://picsum.photos/200/102"
      },
      {
        title: 'Interes 4',
        image: "https://picsum.photos/200/103"
      },
      ]
  }

}
