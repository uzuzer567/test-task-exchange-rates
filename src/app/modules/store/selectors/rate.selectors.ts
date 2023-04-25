import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RATES_KEY, RatesState } from '../state/rate.state';

export const selectState = createFeatureSelector<RatesState>(RATES_KEY);

export const getAllRates = createSelector(selectState, state => state.rates);
export const getSelectedRates = createSelector(selectState, state =>
  state.rates.filter(rate => rate.isSelected)
);
