import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noValue',
})
export class NoValuePipe implements PipeTransform {
  transform(value: any): number | string {
    if (value === undefined || value === null || !Number.isFinite(value)) {
      return '------';
    } else {
      return value.toFixed(6);
    }
  }
}
