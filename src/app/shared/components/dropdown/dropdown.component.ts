import { Component } from '@angular/core';
import { DropdownOption } from '../../../core/interfaces/dropdown-option';
import { ExchangeRatesService } from '../../../core/services/exchange-rates.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  get options() {
    return this.exchangeRatesService.rates;
  }

  constructor(private exchangeRatesService: ExchangeRatesService) {}

  onClick(option: DropdownOption) {
    option.isSelected = !option.isSelected;
  }
}
