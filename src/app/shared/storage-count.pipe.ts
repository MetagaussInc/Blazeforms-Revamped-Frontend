import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storageCount'
})
export class StorageCountPipe implements PipeTransform {

  transform(value: any, precision: number = 2): any {
    if (value == 0) return '0';
    if (value > 0 && value < 1073741824) {
      var i = (value) / (1024 * 1024);
      var sizes = 'MB';
    }
    else {
      var i = (value) / (1024 * 1024 * 1024);
      var sizes = 'GB';
    }

    if (i == 0) return value + ' ' + sizes;
    return (i).toFixed(precision) + ' ' + sizes;
  }

}
