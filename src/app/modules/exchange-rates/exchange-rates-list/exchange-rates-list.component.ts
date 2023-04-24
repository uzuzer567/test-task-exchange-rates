import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';
import { ExchangeRatesApiService } from '../../../core/services/exchange-rates-api.service';
import { ExchangeRatesService } from '../../../core/services/exchange-rates.service';
import { DropdownOption } from '../../../core/interfaces/dropdown-option';

@Component({
  selector: 'app-exchange-rates-list',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesListComponent implements OnInit, OnDestroy {
  rates!: Rate[];
  timer!: Subscription;
  constructor(
    private exchangeRatesApiService: ExchangeRatesApiService,
    private exchangeRatesService: ExchangeRatesService
  ) {}

  ngOnInit() {
    this.exchangeRatesApiService
      .getRates(RateCode.RUB, this.getRates())
      .subscribe(rates => {
        this.setRates(rates.quotes);
      });

    interval(5000)
      .pipe(() =>
        this.exchangeRatesApiService.getRates(RateCode.RUB, this.getRates())
      )
      .subscribe(rates => {
        this.setRates(rates.quotes);
      });
  }

  getRates(): RateCode[] {
    return this.exchangeRatesService.rates
      .filter((rate: DropdownOption) => rate.isSelected)
      .map((rate: DropdownOption) => {
        return rate.rateCode;
      });
  }

  setRates(rates: any) {
    this.rates = Object.keys(rates).map(rate => ({
      code: rate.replace(RateCode.RUB, '') as RateCode,
      value: rates[rate],
    }));
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
