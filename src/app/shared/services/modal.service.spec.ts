import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check modal window opening', () => {
    expect(service.modalRef).toBeUndefined();
    service.openDialog({});
    expect(service.modalRef).toBeDefined();
  });
});
