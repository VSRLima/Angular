import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  showAlert(message: string, type: string, dismissTimeout: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showConfirm(title: string, content:string, okTxt?: string, cancelTxt?:string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.content = content;
    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }
    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
