import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json'
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  picture: string;
  pokemon: Pokemon;
  caught: boolean;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokedex: PokedexService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.picture = this.pokedex.getPicture(this.id);
    this.pokemon = this.pokedex.getPokemon(this.id);
  }

  returnToPokedex(): void {
    this.router.navigate(['/']);
  }

  catch(): void {
    this.caught = true;
    this.pokedex.catchPokemon(this.id);
    this.pokemon.caught = true;
  }

  release(): void {
    this.caught = false;
    this.pokedex.releasePokemon(this.id);
    this.pokemon.caught = false;
  }

}
