import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.services'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  heroe: Heroes;
  idx:number;

  constructor(private activateRouter:ActivatedRoute,private _heroesService:HeroesService,) {
    this.activateRouter.params.subscribe(params=>{
      this.heroe=this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
    
   }


}
