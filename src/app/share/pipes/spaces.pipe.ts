import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces',
})
export class SpacesPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: string): any {
    return value.replaceAll(' ', '_');
  }
}
