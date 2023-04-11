import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    let time = (value.seconds*1000) + (value.nanoseconds/1000000)
    let date = new Date(time).getDate();
    let month = new Date(time).getMonth() + 1;
    let year = new Date(time).getFullYear();
    return year + '.' + month + '.' + date +'.';
  }

}
