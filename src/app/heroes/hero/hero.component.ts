import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName (): string{
    return this.name.toUpperCase();
  }

  getHeroDescription (): string{
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }

changeHero(): void{
  this.name = 'Spiderman';
}

changeAge (): void{
  this.age = 25;
}

resetForm():void{
    this.name = 'ironman';
    this.age = 45;
}




}
