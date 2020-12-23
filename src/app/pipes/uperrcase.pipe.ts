import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uperrcase'
})
export class UperrcasePipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) return ''
    return value.toUpperCase()
  }

}
