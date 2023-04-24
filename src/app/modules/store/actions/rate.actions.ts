import { createAction, props } from '@ngrx/store';
import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';

export enum RateActionsNames {
  Init = '[Rate] Init',
  LoadRates = '[Rate] Load Rates',
  LoadRatesSuccess = '[Rate] Load Rates Success',
  SelectRate = '[Rate] Change Rate',
}

export const init = createAction(RateActionsNames.Init);

export const loadRates = createAction(RateActionsNames.LoadRates);

export const loadRatesSuccess = createAction(
  RateActionsNames.LoadRatesSuccess,
  props<{ rates: Rate[] }>()
);

export const selectRate = createAction(
  RateActionsNames.SelectRate,
  props<{ code: RateCode }>()
);
