import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): unknown {
    if (value != undefined)
      return value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
    return '';
  }
}
