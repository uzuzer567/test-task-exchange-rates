import { ActionReducerMap } from '@ngrx/store';
import { RATES_KEY, RatesState } from '../state/rate.state';
import { ratesReducer } from './rate.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  [RATES_KEY]: RatesState;
}

export const reducers: ActionReducerMap<State> = {
  [RATES_KEY]: ratesReducer,
};
