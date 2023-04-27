import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  openDialog(data: any): any {
    this.modalRef?.close();
    this.modalRef = this.modalService.open(ModalComponent, { centered: true });
    this.modalRef.componentInstance.data = data;
  }
}
