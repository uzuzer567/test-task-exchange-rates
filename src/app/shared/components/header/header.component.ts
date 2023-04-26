import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentDate = new Date();
  intervalId!: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.updateDate();
    }, 1000);
  }

  updateDate() {
    this.currentDate = new Date();
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
