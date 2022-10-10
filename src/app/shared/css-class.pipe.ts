import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssClass',
  standalone: true
})
export class CssClassPipe implements PipeTransform {

  transform(index: number, prefix: string): string {
    return prefix+`${index}`
  }

}
