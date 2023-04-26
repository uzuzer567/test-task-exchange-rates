import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../shared/services/modal.service';
import { HttpConfigInterceptor } from './http-config.interceptor';

describe('HttpConfigInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [ModalService, HttpConfigInterceptor],
    });
  });

  it('should be created', () => {
    const interceptor: HttpConfigInterceptor = TestBed.inject(
      HttpConfigInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
