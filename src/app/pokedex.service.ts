import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import * as jsonPokemonList from '../assets/Pokemon.json';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokeList: Pokemon[] = (jsonPokemonList as any).default;

  constructor() { }

  getPicture(id: number): string {
    return '/assets/images/' + id.toString() + '.png';
  }

  getPokemon(id: number): Pokemon {
    return this.pokeList.find(x => x.id === id);
  }

  catchPokemon(id: number): void {
    this.getPokemon(id).caught = true;
  }

  releasePokemon(id: number): void {
    this.getPokemon(id).caught = false;
  }
}

