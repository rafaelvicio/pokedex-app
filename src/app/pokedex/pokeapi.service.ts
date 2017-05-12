import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class PokeapiService {

  url = '//pokeapi.co/api/v1/';
  pokeList = [];

  constructor(private http: Http) { }

  listAll() {
    return this.http.get(`${this.url}pokedex/1`)
      .map( response => response.json() )
      .subscribe( response => {
        return this.organizePokeListResponse(response);
      });
  }

  getPokemon(number: number) {
    return this.http.get(`${this.url}pokemon/${number}`)
      .map( response => response.json());
  }

  private organizePokeListResponse(response) {
    let pokemonList = this.filterPokemon(response.pokemon);
    this.pokeList = this.sortPokemon(pokemonList);
    return this.pokeList;
  }

  private getNumberFromUrl(url){
    let number = parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
    return number;
  }

  private filterPokemon(pokemonList) {
    return pokemonList
      .map( pokemon => {
        pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
        return pokemon;
      })
      .filter( pokemon => pokemon.number < 1000 );
  }

  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b)=>{
      var aNumber = this.getNumberFromUrl(a.resource_uri),
        bNumber = this.getNumberFromUrl(b.resource_uri);

      return (aNumber > bNumber ? 1 : -1);
    });
  }
}
