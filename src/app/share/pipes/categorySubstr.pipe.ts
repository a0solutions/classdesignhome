import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySubstr',
})
export class CategorySubstrPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.category == 'Bedroom') {
      return value.reference.substr(0, 9).replaceAll(' ', '');
    } else if (value.category == 'Bathroom') {
      let newLenght: number = value.reference.length;
      let sufix: string = value.reference.substr(newLenght - 3, 3);
      let prefix: string = value.reference.substr(1, 7);
      return prefix + sufix;
    }
  }
}
