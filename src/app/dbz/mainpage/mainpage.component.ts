import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder : 0,
  };
  
  constructor() {}

  ngOnInit(): void {
  }

}
