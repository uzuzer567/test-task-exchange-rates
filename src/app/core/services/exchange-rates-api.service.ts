import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RateCode } from '../enums/rate-code';

const apiKey = '';
const baseUrl = 'https://api.apilayer.com/currency_data';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesApiService {
  constructor(private http: HttpClient) {}

  result = {
    success: true,
    timestamp: 1682355663,
    source: 'RUB',
    quotes: {
      RUBUSD: 0.012278,
      RUBEUR: 0.011127,
      RUBGBP: 0.009848,
    },
  };

  getRates(sourceRate: string, currencies: RateCode[]): Observable<any> {
    const params = new HttpParams()
      .set('source', sourceRate)
      .set('currencies', currencies.join(','));
    const headers = new HttpHeaders().set('apikey', apiKey);
    return this.http.get(`${baseUrl}/live`, {
      headers,
      params,
    });
  }
}
