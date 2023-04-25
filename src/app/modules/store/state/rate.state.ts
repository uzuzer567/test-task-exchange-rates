import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';

export const RATES_KEY = 'rates';

export interface RatesState {
  rates: Rate[];
}

export const initialRatesState: RatesState = {
  rates: [
    {
      code: RateCode.USD,
      currentValue: 0,
      previousValue: 0,
      isSelected: true,
    },
    {
      code: RateCode.EUR,
      currentValue: 0,
      previousValue: 0,
      isSelected: true,
    },
    {
      code: RateCode.GBP,
      currentValue: 0,
      previousValue: 0,
      isSelected: true,
    },
    {
      code: RateCode.CNY,
      currentValue: 0,
      previousValue: 0,
      isSelected: false,
    },
    {
      code: RateCode.JPY,
      currentValue: 0,
      previousValue: 0,
      isSelected: false,
    },
    {
      code: RateCode.TRY,
      currentValue: 0,
      previousValue: 0,
      isSelected: false,
    },
  ],
};
