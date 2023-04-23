import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { interval, finalize } from 'rxjs';
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
export class ExchangeRatesListComponent implements OnInit {
  rates!: Rate[];

  loading = true;

  constructor(
    private exchangeRatesApiService: ExchangeRatesApiService,
    private exchangeRatesService: ExchangeRatesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.exchangeRatesApiService
      .getRates(RateCode.RUB, this.getRates())
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe(rates => {
        this.setRates(rates.quotes);
      });

    interval(5000)
      .pipe(
        () =>
          this.exchangeRatesApiService.getRates(RateCode.RUB, this.getRates()),
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
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
}
