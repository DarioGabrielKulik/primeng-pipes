import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value:string, enMayusculas:boolean = true): String {
    if(enMayusculas){
     return value.toLocaleUpperCase()
    }else{
     return value.toLocaleLowerCase()
    }

  }

}
