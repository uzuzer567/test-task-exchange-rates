import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRates } from '../../store/actions/rate.actions';
import { getSelectedRates } from '../../store/selectors/rate.selectors';

@Component({
  selector: 'app-exchange-rates-list',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesListComponent implements OnInit {
  rates$ = this.store.select(getSelectedRates);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadRates());

    setInterval(() => {
      this.store.dispatch(loadRates());
    }, 5000);
  }
}
