import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { PokeapiService } from '../pokeapi.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {

  pokemonNumber: number;
  pokemon = {};
  urlSubscribe: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private PokeapiService: PokeapiService
  ) { }

  ngOnInit() {
    this.urlSubscribe = this.activatedRoute.params.subscribe((params: any)=> {
      this.pokemonNumber = parseInt(params['number'], 10);
      this.getPokemon();
    });
  }

  ngOnDestroy() {
    this.urlSubscribe.unsubscribe();
  }

  getPokemon() {
    if (typeof this.pokemonNumber === 'number') {
      this.PokeapiService.getPokemon(this.pokemonNumber)
        .subscribe( response => {
          this.pokemon = response;
        });

      //this.pokemon = this.PokeapiService.getPokemon(this.pokemonNumber);
    }else {
      this.router.navigate(['/']);
    }
  }

}
