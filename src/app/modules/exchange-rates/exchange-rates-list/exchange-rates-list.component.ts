import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRates } from '../../store/actions/rate.actions';
import {
  getSelectedRates,
  getRatesLoading,
} from '../../store/selectors/rate.selectors';

@Component({
  selector: 'app-exchange-rates-list',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesListComponent implements OnInit, OnDestroy {
  rates$ = this.store.select(getSelectedRates);
  isLoading$ = this.store.select(getRatesLoading);
  intervalId!: number;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadRates());

    this.intervalId = window.setInterval(() => {
      this.store.dispatch(loadRates());
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
