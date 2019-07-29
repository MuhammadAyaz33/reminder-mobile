import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  type: string;
  constructor(public bsModalRef: BsModalRef,) { }

  ngOnInit() {
  }
  closeModal() {
    this.bsModalRef.hide();
  }
}
