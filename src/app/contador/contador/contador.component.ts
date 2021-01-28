import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent implements OnInit {
// tslint:disable: no-inferrable-types
   titulo: string = 'Contador App';
   numero: number = 10;
   base: number = 10;

   acumular( valor: number )  { this.numero += valor; }

  constructor() { }

  ngOnInit(): void {
  }

}
