import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {
  arreglo1 = [10, 20, 30, 40, 50];
  constructor() { }

  ngOnInit() {}

  rastrearPor(indice: number, elemento: number) {
    console.log(indice, elemento);
  }
}
