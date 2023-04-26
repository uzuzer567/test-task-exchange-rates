import { createReducer, on } from '@ngrx/store';
import {
  loadRates,
  loadRatesSuccess,
  selectRate,
} from '../actions/rate.actions';
import { initialRatesState } from '../state/rate.state';

export const ratesReducer = createReducer(
  initialRatesState,
  on(loadRates, state => ({ ...state, isLoading: true })),
  on(loadRatesSuccess, (state, result) => ({
    ...state,
    isLoading: false,
    rates: result.rates,
  })),
  on(selectRate, (state, { code }) => ({
    ...state,
    isLoading: true,
    rates: state.rates.map(rate => {
      if (rate.code === code) {
        return {
          code: rate.code,
          isSelected: !rate.isSelected,
          currentValue: rate.currentValue,
          previousValue: rate.previousValue,
        };
      }
      return rate;
    }),
  }))
);
