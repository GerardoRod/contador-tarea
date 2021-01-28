import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder : number;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder : 14000,
  };

  submit(){
    console.log(this.nuevo);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
