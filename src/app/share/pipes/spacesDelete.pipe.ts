import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteSpace',
})
export class SpacesDeletePipe implements PipeTransform {
  transform(value: string): any {
    return value.replaceAll(' ', '');
  }
}
