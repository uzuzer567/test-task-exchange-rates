import { RateCode } from '../../core/enums/rate-code';

export interface Rate {
  code: RateCode;
  value: number;
}
