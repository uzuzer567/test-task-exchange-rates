import { Injectable } from '@angular/core';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loadRates, loadRatesSuccess } from '../actions/rate.actions';
import { getAllRates } from '../../store/selectors/rate.selectors';
import { RateCode } from '../../../core/enums/rate-code';
import { ExchangeRatesApiService } from '../../../core/services/exchange-rates-api.service';
import { ExchangeRatesService } from '../../../core/services/exchange-rates.service';

@Injectable()
export class RatesEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly exchangeRatesApiService: ExchangeRatesApiService,
    private readonly exchangeRatesService: ExchangeRatesService
  ) {}

  public readonly loadRates = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRates),
      withLatestFrom(this.store.select(getAllRates)),
      mergeMap(([_, rates]) =>
        this.exchangeRatesApiService
          .getRates(
            RateCode.RUB,
            this.exchangeRatesService.getCodeOfActiveRates(rates)
          )
          .pipe(
            map(result =>
              loadRatesSuccess({
                rates: this.exchangeRatesService.updateValueOfRates(
                  rates,
                  result.quotes
                ),
              })
            )
          )
      )
    )
  );
}
