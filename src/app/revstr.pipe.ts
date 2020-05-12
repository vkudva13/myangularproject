import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revstr'
})
export class RevstrPipe implements PipeTransform {

  transform(text:string):string {
    return text.split("").reverse().join("");
  }

}
