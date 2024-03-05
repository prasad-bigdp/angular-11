import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad'
})
export class PrasadPipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): unknown {
    if (value % 2 == 0)
    {
      return "Even"
    }
    else {
      return "ODD"
    }

  }

}
