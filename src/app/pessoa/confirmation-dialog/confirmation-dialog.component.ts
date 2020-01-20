import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {
  
  @Input() _id: string;
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal, private api: ApiService) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.deletePessoa();
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

  deletePessoa() {
    console.log(this._id);
    this.api.deletePessoa(this._id)
      .subscribe(res => {
          console.log(res);
          this.activeModal.close(true);
          location.reload();
        }, (err) => {
          console.log(err);
          this.activeModal.close(true);
          location.reload();
        }
      );
  }

}
