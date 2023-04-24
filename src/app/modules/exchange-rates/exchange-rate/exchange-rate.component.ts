import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Rate } from '../../../core/interfaces/rate';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRateComponent implements OnInit {
  @ViewChild('triangleElement', { static: true }) triangleElement!: ElementRef;
  @ViewChild('differenceElement', { static: true })
  differenceElement!: ElementRef;
  @Input() rate!: Rate;

  get difference(): number {
    if (this.rate.currentValue) {
      return this.rate.currentValue - this.rate.previousValue;
    } else {
      return 0;
    }
  }

  ngOnInit() {
    if (this.difference > 0) {
      this.triangleElement.nativeElement.classList.add('rate__triangle-green');
      this.differenceElement.nativeElement.classList.add('green');
    } else if (this.difference < 0) {
      this.triangleElement.nativeElement.classList.add('rate__triangle-red');
      this.differenceElement.nativeElement.classList.add('red');
    }
  }
}
