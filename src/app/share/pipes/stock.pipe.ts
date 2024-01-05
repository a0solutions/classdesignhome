import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
})
export class StockPipe implements PipeTransform {
  transform(value: boolean): unknown {
    if (value) return 'IN STOCK';
    return 'OUT OF STOCK';
  }
}
