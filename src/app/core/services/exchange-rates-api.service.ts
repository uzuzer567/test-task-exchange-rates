import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RateCode } from '../enums/rate-code';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesApiService {
  constructor(private http: HttpClient) {}

  getRates(sourceRate: string, currencies: RateCode[]): Observable<any> {
    const params = new HttpParams()
      .set('source', sourceRate)
      .set('currencies', currencies.join(','));
    return this.http.get(`${environment.apiUrl}/live`, {
      params,
    });
  }
}
