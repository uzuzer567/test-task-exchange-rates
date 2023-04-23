import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer, switchMap } from 'rxjs';
import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';
import { ExchangeRatesApiService } from '../../../core/services/exchange-rates-api.service';

@Component({
  selector: 'app-exchange-rates-list',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss'],
})
export class ExchangeRatesListComponent implements OnInit, OnDestroy {
  rates: Rate[] = [{rate: '', value: 0}];
  timer!: Subscription;
  constructor(private exchangeRatesApiService: ExchangeRatesApiService) {}

  ngOnInit() {
    /*
    this.exchangeRatesApiService
      .getRates(RateCode.RUB, [RateCode.USD, RateCode.EUR, RateCode.GBP])
      .subscribe(rates => {
        this.rates = Object.keys(rates.quotes).map(rate => ({
          rate: rate.replace(RateCode.RUB, ''),
          value: rates.quotes[rate],
        }));
      });
  
    this.timer = timer(0, 5000)
      .pipe(
        switchMap(() =>
          this.exchangeRatesApiService.getRates(RateCode.RUB, [
            RateCode.USD,
            RateCode.EUR,
            RateCode.GBP,
          ])
        )
      )
      .subscribe(rates => {
        this.rates = Object.keys(rates.quotes).map(rate => ({
          rate: rate.replace(RateCode.RUB, ''),
          value: rates.quotes[rate],
        }));
      });
    */
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
