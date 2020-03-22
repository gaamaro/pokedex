import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokenumber'
})
export class PokenumberPipe implements PipeTransform {

  transform(value: number): string {
    return ('000' + value).slice(-3);
  }

}
