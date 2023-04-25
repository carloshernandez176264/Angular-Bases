import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
  <h3>Counter : {{counter}}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent implements OnInit {

  public counter: number = 10;

  increaseBy():void{
    this.counter++;
  }

  decreaseBy():void{
  this.counter--;
  }

  resetCounter():void{
    this.counter = 10;
  }

  constructor() { }

  ngOnInit() { }
}

