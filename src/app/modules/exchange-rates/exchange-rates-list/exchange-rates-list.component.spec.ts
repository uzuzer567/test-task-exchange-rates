import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ExchangeRateComponent } from '../exchange-rate/exchange-rate.component';
import { ExchangeRatesListComponent } from './exchange-rates-list.component';

describe('ExchangeRatesListComponent', () => {
  let component: ExchangeRatesListComponent;
  let fixture: ComponentFixture<ExchangeRatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [ExchangeRatesListComponent, ExchangeRateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeRatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
