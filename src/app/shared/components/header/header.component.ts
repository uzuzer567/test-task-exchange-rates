import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { RateCode } from '../../../core/enums/rate-code';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  RateCode = RateCode;
  currentDate = new Date();
  intervalId!: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.currentDate = new Date();
      this.cdr.markForCheck();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
