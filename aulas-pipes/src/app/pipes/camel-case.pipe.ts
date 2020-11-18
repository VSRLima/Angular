import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split('');
    let result =  '';
    
    for(let v of values) {
      result += v
    }
    return result.replace(
      result[0], result[0].toUpperCase() 
      );
    
  }

 

}
