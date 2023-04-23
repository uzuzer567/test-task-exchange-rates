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
  @ViewChild('triangle', { static: true }) triangleElement!: ElementRef;
  @ViewChild('difference', { static: true })
  differenceElement!: ElementRef;
  @Input() rate!: Rate;

  ngOnInit() {
    if (this.rate) {
      this.triangleElement.nativeElement.classList.add('rate__triangle-green');
      this.differenceElement.nativeElement.classList.add('green');
    } else {
      this.triangleElement.nativeElement.classList.add('rate__triangle-red');
      this.differenceElement.nativeElement.classList.add('red');
    }
  }
}
