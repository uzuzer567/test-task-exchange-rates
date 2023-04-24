import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RateCode } from '../../../core/enums/rate-code';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  RateCode = RateCode;
  currentDate = new Date();
}
