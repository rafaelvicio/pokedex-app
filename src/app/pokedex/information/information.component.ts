import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../pokeapi.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  pokemonNumber: number;
  pokemon = {};

  constructor(private PokeapiService: PokeapiService) { }

  ngOnInit() {
    this.pokemonNumber = 386;
    this.getPokemon();
  }

  getPokemon() {
    if (typeof this.pokemonNumber === 'number') {
      this.PokeapiService.getPokemon(this.pokemonNumber)
        .subscribe( response => {
          this.pokemon = response;
        });

      //this.pokemon = this.PokeapiService.getPokemon(this.pokemonNumber);
    }else {
      //////
    }
  }

}
