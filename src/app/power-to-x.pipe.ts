import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: number, s:number=1): unknown {
    return Math.pow(value,s);
  }

}
