import { TestBed } from '@angular/core/testing';
import { Rate } from '../interfaces/rate';
import { RateCode } from '../enums/rate-code';
import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  let service: ExchangeRatesService;
  const fakeRates: Rate[] = [
    {
      code: RateCode.USD,
      isSelected: true,
      currentValue: 0.111111,
      previousValue: 0.111112,
    },
    {
      code: RateCode.EUR,
      isSelected: false,
      currentValue: 0.222222,
      previousValue: 0.222223,
    },
  ];
  const fakeResponse = {
    success: true,
    timestamp: 1682355663,
    source: 'RUB',
    quotes: {
      RUBUSD: 0.012278,
      RUBEUR: 0.011127,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check the length of the array of active rates', () => {
    const activeRates = service.getCodeOfActiveRates(fakeRates);
    expect(activeRates.length).toBe(1);
  });

  it('should check current value of the rate', () => {
    const updatedRates = service.updateValueOfRates(
      fakeRates,
      fakeResponse.quotes
    );
    expect(updatedRates[0].currentValue).toBe(fakeResponse.quotes.RUBUSD);
  });
});
