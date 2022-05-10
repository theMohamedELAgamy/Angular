import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverte'
})
export class StringConvertePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace('-',' ');
  }

}
