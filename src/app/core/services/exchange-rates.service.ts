import { Injectable } from '@angular/core';
import { Rate } from '../../core/interfaces/rate';
import { RateCode } from '../../core/enums/rate-code';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  getCodeOfActiveRates(rates: Rate[]): RateCode[] {
    return rates
      .filter((rate: Rate) => rate.isSelected)
      .map((rate: Rate) => {
        return rate.code;
      });
  }

  updateValueOfRates(currentRates: Rate[], receivedRates: any): Rate[] {
    return currentRates.map(rate => ({
      code: rate.code,
      isSelected: rate.isSelected,
      currentValue: receivedRates[RateCode.RUB + rate.code] ?? 0,
      previousValue: rate.currentValue,
    }));
  }
}
