import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
})
export class StockPipe implements PipeTransform {
  transform(value: number): unknown {
    if (value != 0) return 'In Stock';
    return 'Out of Stock';
  }
}
