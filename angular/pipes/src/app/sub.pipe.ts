import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub'
})
  /* prasad-->0,2===?"prasad".subString(0,2) */
export class SubPipe implements PipeTransform {

  transform(value: string, val1:number, val2:number): string {
     return value.substring(val1,val2)
  }

}
