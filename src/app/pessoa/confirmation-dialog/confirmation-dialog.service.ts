import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    _id: string,
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancelar',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
      
      const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
      modalRef.componentInstance._id = _id;
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.message = message;
      modalRef.componentInstance.btnOkText = btnOkText;
      modalRef.componentInstance.btnCancelText = btnCancelText;

      return modalRef.result;
  }

}
