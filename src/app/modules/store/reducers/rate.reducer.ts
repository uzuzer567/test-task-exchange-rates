import { createReducer, on } from '@ngrx/store';
import { loadRatesSuccess, selectRate } from '../actions/rate.actions';
import { initialRatesState } from '../state/rate.state';

export const ratesReducer = createReducer(
  initialRatesState,
  on(loadRatesSuccess, (state, result) => ({ ...state, rates: result.rates })),
  on(selectRate, (state, { code }) => ({
    ...state,
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
