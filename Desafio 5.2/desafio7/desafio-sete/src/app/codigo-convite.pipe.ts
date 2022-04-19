import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoConvite'
})
export class CodigoConvitePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
