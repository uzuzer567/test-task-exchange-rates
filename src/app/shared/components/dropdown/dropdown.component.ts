import { Component } from '@angular/core';
import { Rate } from '../../../core/interfaces/rate';
import { Store } from '@ngrx/store';
import { selectRate } from '../../../modules/store/actions/rate.actions';
import { getAllRates } from '../../../modules/store/selectors/rate.selectors';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  options$ = this.store.select(getAllRates);

  constructor(private readonly store: Store) {}

  onClick(option: Rate) {
    this.store.dispatch(selectRate(option));
  }
}
