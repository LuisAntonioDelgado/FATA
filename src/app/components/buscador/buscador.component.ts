import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.services'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: Heroes[];
  termino: string;

  constructor(private activateroute:ActivatedRoute,private _heroesService:HeroesService) {

   }

  ngOnInit(): void {
    this.activateroute.params.subscribe(params => {
      this.termino=params.ter;
      this.heroes=this._heroesService.buscarHeroes(params.ter);
    console.log(this.heroes);
  })
  }

}
