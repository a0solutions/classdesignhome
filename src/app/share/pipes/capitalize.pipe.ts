import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): unknown {
    const words = value.split(' ');
    let newString: string = '';
    words.forEach(async (x) => {
      newString =
        newString + ' ' + x.slice(0, 1).toUpperCase() + x.slice(1, x.length);
    });
    return newString.slice(1, newString.length);
  }
}
