import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {
    let formattedValue = Math.abs(value).toFixed(2)

    const valueArr = formattedValue.split('')
    for (let i = valueArr.length - 6; i > 0; i-=3){
      valueArr.splice(i, 0 , ' ')
    }

    formattedValue = valueArr.join('')  + ' ₽'
    if (value > 0){
      return '+' + formattedValue
    }else if (value < 0){
      return '-' + formattedValue
    }
    return formattedValue
  }
}
