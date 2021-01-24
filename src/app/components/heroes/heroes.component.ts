import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroes[];

  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();
  }
  verHeroe(idx:number) {
    this.router.navigate(['/heroe',idx])
  }

}
