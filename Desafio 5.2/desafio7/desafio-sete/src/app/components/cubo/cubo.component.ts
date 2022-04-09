import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  valor: number = 0;

  constructor( private router : Router){
    this.valor = this.router.getCurrentNavigation()?.extras.queryParams?.['valor'];
  }

  ngOnInit() {
  }
}


