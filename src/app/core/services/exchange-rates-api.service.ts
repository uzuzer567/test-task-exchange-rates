import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RateCode } from '../enums/rate-code';

const apiKey = '';
const baseUrl = 'https://api.apilayer.com/currency_data';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesApiService {
  constructor(private http: HttpClient) {}

  getRates(sourceRate: string, currencies: RateCode[]): Observable<any> {
    const params = new HttpParams()
      .set('apikey', apiKey)
      .set('source', sourceRate)
      .set('currencies', currencies.join(','));
    return this.http.get(`${baseUrl}/live`, { params });
  }
}
