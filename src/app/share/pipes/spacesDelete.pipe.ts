import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'deleteSpace',
})
export class SpacesDeletePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: string): any {
    return value.replaceAll(' ', '');
  }
}
