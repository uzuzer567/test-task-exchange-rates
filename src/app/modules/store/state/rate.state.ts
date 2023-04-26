import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';

export const RATES_KEY = 'rates';

export interface RatesState {
  isLoading: boolean;
  rates: Rate[];
}

export const initialRatesState: RatesState = {
  isLoading: false,
  rates: [
    {
      code: RateCode.USD,
      currentValue: null,
      previousValue: null,
      isSelected: true,
    },
    {
      code: RateCode.EUR,
      currentValue: null,
      previousValue: null,
      isSelected: true,
    },
    {
      code: RateCode.GBP,
      currentValue: null,
      previousValue: null,
      isSelected: true,
    },
    {
      code: RateCode.CNY,
      currentValue: null,
      previousValue: null,
      isSelected: false,
    },
    {
      code: RateCode.JPY,
      currentValue: null,
      previousValue: null,
      isSelected: false,
    },
    {
      code: RateCode.TRY,
      currentValue: null,
      previousValue: null,
      isSelected: false,
    },
  ],
};
