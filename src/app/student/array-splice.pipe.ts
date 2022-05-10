import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(value:string [],filterString:string): unknown {
    let filteredArray:string[]=[]
    for(let i=0;i<value.length;i++){
      if(value[i].includes(filterString)) filteredArray.push(value[i])
    }
    return filteredArray ;
  }

}
