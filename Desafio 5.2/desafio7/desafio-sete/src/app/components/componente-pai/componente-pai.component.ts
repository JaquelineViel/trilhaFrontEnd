import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@
Component({
  selector: 'app-componente-pai',
  template: ""
})

export class ComponentePaiComponent {

  @Input() numeroComponent: number = 0;

  isPar(valor: number): string {
    return valor % 2 === 0 ? "par" : "ímpar";
  }

  isPrimo(num: number) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

}
