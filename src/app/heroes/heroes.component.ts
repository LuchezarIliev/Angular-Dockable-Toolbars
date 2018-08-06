import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-accounts',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes = HEROES;
    selectedHero: Hero = this.heroes[2];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    addNew(): void {
      let hero = new Hero();
      hero.id = 456;
      hero.name = 'FirstName LastName';
      this.heroes.push(hero);
    }
    
    constructor() {
    }

  ngOnInit() {
  }

}
