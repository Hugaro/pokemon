import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Spicie } from '../models/specie.model';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-pokemon-cell',
  templateUrl: './pokemon-cell.component.html',
  styleUrls: ['./pokemon-cell.component.scss']
})
export class PokemonCellComponent implements OnInit {

  @Input() resourceUrl:  string;

  public pokemon: Pokemon;

  constructor(private resources: ResourceService) { }

  public ngOnInit(): void {
    this.resources.getResource<Spicie>(this.resourceUrl).subscribe(
      (spicie) => {
        this.resources.getResource<Pokemon>(spicie.varieties[0].pokemon.url).subscribe(
          (pokemon) => {
            pokemon.spicie = spicie;
            this.pokemon = pokemon;
          },
          err => console.log(err)
        );
      },
      (err)  => console.log(err.message)
    );
  }
}
