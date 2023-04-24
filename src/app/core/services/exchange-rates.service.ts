import { Injectable } from '@angular/core';
import { DropdownOption } from '../../core/interfaces/dropdown-option';
import { RateCode } from '../../core/enums/rate-code';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  rates: DropdownOption[] = [
    {
      rateCode: RateCode.USD,
      isSelected: true,
    },
    {
      rateCode: RateCode.EUR,
      isSelected: true,
    },
    {
      rateCode: RateCode.GBP,
      isSelected: true,
    },
    {
      rateCode: RateCode.CNY,
      isSelected: false,
    },
    {
      rateCode: RateCode.JPY,
      isSelected: false,
    },
    {
      rateCode: RateCode.TRY,
      isSelected: false,
    },
  ];
}
