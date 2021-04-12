import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json'
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(public pokedex: PokedexService) { }

  ngOnInit(): void {
  }

  getPicture(id: number): string {
    return this.pokedex.getPicture(id);
  }

}
