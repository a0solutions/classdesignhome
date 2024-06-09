import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySubstr',
})
export class CategorySubstrPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(value: any, _args?: any): any {
    if (value.category == 'Bedroom') {
      return value.reference.substr(0, 9).replaceAll(' ', '');
    } else if (value.category == 'Bathroom') {
      const newLenght: number = value.reference.length;
      const sufix: string = value.reference.substr(newLenght - 3, 3);
      const prefix: string = value.reference.substr(1, 7);
      return prefix + sufix;
    }
  }
}
