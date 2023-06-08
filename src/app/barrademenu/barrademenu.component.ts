import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-barrademenu',
  templateUrl: './barrademenu.component.html',
  styleUrls: ['./barrademenu.component.css']
})
export class BarrademenuComponent implements OnInit {
  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  @Output() presionopcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  presion(i: number): void {
    this.presionopcion.emit(i);
  }
}
