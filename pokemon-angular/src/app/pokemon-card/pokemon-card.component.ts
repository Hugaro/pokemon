import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() resourceUrl?: string;
  @Input() resourceObj?: Pokemon;
  public pokemon: Pokemon;

  constructor(private resources: ResourceService) { }

  public ngOnInit(): void {
    if (this.resourceObj) {
      this.pokemon = this.resourceObj;
    } else {
      this.resources.getResource<Pokemon>(this.resourceUrl).subscribe(
        (data) => {
          this.pokemon = data;
          // this.formatAbility(this.pokemon.abilities);
          // this.formatMove(this.pokemon.moves);
          // this.formatType(this.pokemon.types);
          // this.formatSprites(this.pokemon.sprites);
          // delete this.pokemon.forms;
          // delete this.pokemon.held_items;
          // delete this.pokemon.location_area_encounters;
          // delete this.pokemon.game_indices;
        },
        (err)  => console.log(err.message)
      );
    }
  }
  formatSprites(sprites: any) {
    delete sprites.back_female;
    delete sprites.back_shiny;
    delete sprites.back_shiny_female;
    delete sprites.front_female;
    delete sprites.front_shiny;
    delete sprites.front_shiny_female;
  }
  formatAbility(abilities: any[]) {
    for (const i of abilities) {
      i.ability.id = Number(i.ability.url.replace('https://pokeapi.co/api/v2/ability/',  '').replace('/',  ''));
      delete i.ability.url;
      delete i.ability.effect_entries;
      delete i.is_hidden;
      delete i.pokemon;
      delete i.slot;
    }
  }
  formatMove(moves: any[]) {
    for (const i of moves) {
      i.move.id = Number(i.move.url.replace('https://pokeapi.co/api/v2/move/',  '').replace('/',  ''));
      delete i.move.url;
      delete i.version_group_details;
      delete i.move_learn_method;
    }
  }
  formatType(types: any[]) {
    for (const i of types) {
      i.type.id = Number(i.type.url.replace('https://pokeapi.co/api/v2/type/',  '').replace('/',  ''));
      delete i.type.url;
      delete i.slot;
    }
  }
}
