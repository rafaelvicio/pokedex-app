import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter: string;


  constructor(private PokeapiService: PokeapiService) { }

  ngOnInit() {
    this.PokeapiService.listAll();
  }

  filterByName() {
    if (this.nameFilter) {
      return this.PokeapiService.pokeList.filter( pokemon => {
        return pokemon.name.indexOf(this.nameFilter) !== -1;
      });
    }
    return this.PokeapiService.pokeList || [];
  }

}
