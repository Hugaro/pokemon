import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemon: Pokemon;
  public resourceUrl: string;

  public isMobile = window.screen.width < 386;

  constructor(private activatedRoute: ActivatedRoute,
              private route: RouteService,
              private service: ResourceService) { }

  public ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    this.route.load().then(
      urls => {
        this.resourceUrl = urls.getUrlName(urls.pokemon, name);
        this.service.getResource<Pokemon>(this.resourceUrl).subscribe(
          data => this.pokemon = data
        );
      }
    );
  }
}
