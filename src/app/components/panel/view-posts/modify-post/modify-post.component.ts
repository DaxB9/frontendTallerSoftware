import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import './modify-post.component.css';
import { PreviewService } from 'src/app/services/preview.service';
@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.css']
})
export class ModifyPostComponent implements OnInit {

  @Input() solicitudId!: string;
  preview: any = [];
  date!:Date;
  title: string = '';
  body: string = '';

  constructor(private previewService: PreviewService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const solicitudId = this.solicitudId;
    const title = form.value.title;
    const content = form.value.content;
    const date = this.date;

    this.previewService.updatePost(solicitudId, title, content, date)
      .subscribe({
        next: (response) => {
          console.log('La solicitud se ha enviado correctamente:', response);
          this.activeModal.close();
        },
        error: (errorResponse) => {
          console.log('Ha ocurrido un error al enviar la solicitud:', errorResponse);
        }
      });
    this.activeModal.close();
  }

  closeModal(): void {
    this.activeModal.close();
  }

}
