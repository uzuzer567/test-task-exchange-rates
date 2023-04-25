import { RateCode } from '../../core/enums/rate-code';

export interface Rate {
  code: RateCode;
  isSelected: boolean;
  currentValue: number;
  previousValue: number;
}
