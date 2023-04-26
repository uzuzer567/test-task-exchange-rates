import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { Rate } from '../../../core/interfaces/rate';
import { RateCode } from '../../../core/enums/rate-code';
import { ExchangeRateComponent } from './exchange-rate.component';

describe('ExchangeRateComponent', () => {
  let component: ExchangeRateComponent;
  let fixture: ComponentFixture<ExchangeRateComponent>;
  const fakeRate: Rate = {
    code: RateCode.USD,
    isSelected: true,
    currentValue: 0,
    previousValue: 0,
  };
  const fakeRateWithNegativeDifference: Rate = {
    code: RateCode.USD,
    isSelected: true,
    currentValue: 0.11111,
    previousValue: 0.111112,
  };
  const fakeRateWithPositiveDifference: Rate = {
    code: RateCode.USD,
    isSelected: true,
    currentValue: 0.111114,
    previousValue: 0.111112,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [ExchangeRateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeRateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check difference between current and previous value of the rate (!==0)', () => {
    component.rate = fakeRateWithNegativeDifference;
    expect(component.difference).toBeTruthy();
  });

  it('should check difference between current and previous value of the rate (===0)', () => {
    component.rate = fakeRate;
    expect(component.difference).toBeFalsy();
  });

  it('should add "green" class to HTML element with "rate__difference-container" class', () => {
    component.rate = fakeRateWithPositiveDifference;
    fixture.detectChanges();
    const differenceElement: HTMLElement = fixture.debugElement.query(
      By.css('.rate__difference-container')
    ).nativeElement;
    expect(differenceElement.classList).toContain('green');
  });

  it('should add "red" class to HTML element with "rate__difference-container" class', () => {
    component.rate = fakeRateWithNegativeDifference;
    fixture.detectChanges();
    const differenceElement = fixture.debugElement.query(
      By.css('.rate__difference-container')
    ).nativeElement;
    expect(differenceElement.classList.value).toBe(
      'rate__difference-container red'
    );
  });
});
