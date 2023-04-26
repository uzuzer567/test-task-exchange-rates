import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { ModalService } from '../../shared/services/modal.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private modalService: ModalService,
    private translateService: TranslateService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const apiKey = '';
    req = req.clone({
      setHeaders: {
        apikey: apiKey,
      },
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const dialogData = {
          titleText: this.translateService.instant('errorModal.title'),
          messageText: this.translateService.instant('errorModal.message'),
          message:
            error && error.error && error.error.message
              ? error.error.message
              : '',
          statusText: this.translateService.instant('errorModal.status'),
          status: {
            code: error.status,
            statusText: error.statusText,
          },
        };
        this.modalService.openDialog(dialogData);
        return throwError(error);
      })
    );
  }
}
