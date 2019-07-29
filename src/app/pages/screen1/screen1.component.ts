import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  bsModalRef: BsModalRef;
  bsModalService: BsModalService
  config = {
    class: 'custom-modal modal-dialog-centered modal-md successModal'
  };
  constructor() { }

  ngOnInit() {
  }
  openSetReminderModal() {
    const initialState = { type: 'setReminder'};
    this.bsModalRef = this.bsModalService.show(
      ConfirmModalComponent,
      Object.assign({}, this.config, { initialState })
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
