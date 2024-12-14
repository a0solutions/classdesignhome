import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyNumbers',
})
export class OnlyNumbersPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value != 'King' && value != 'Queen') {
      const text = value.match(/\d+/g);
      return text[0];
    } else {
      return value;
    }
  }
}
