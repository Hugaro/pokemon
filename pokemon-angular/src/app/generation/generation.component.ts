
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Generation } from '../models/generation.models';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  public resourceUrl: string;
  public generation: Generation;
  public regionUrl: string;
  public pokemons: Resource[];
  public moves;
  public types;

  constructor(private activatedRoute: ActivatedRoute,
              private route: RouteService,
              private  service: ResourceService) { }

ngOnInit() {
    console.log('ngOnInit');
    const name = this.activatedRoute.snapshot.paramMap.get('name');

    this.route.load().then(
      urls => {
        this.resourceUrl = urls.getUrlName(urls.generation, name);
        console.log(this.resourceUrl);
        this.service.getResource<Generation>(this.resourceUrl).subscribe(
          data => {
            this.generation = data;
            this.route.load().then(
              route2 => {
                this.regionUrl = route2.getUrlName(route2.region, data.main_region.name);
              }
            );
            // this.pokemons = data.pokemon_species;
            // this.moves = data.moves;
            // this.types = data.types;
          },
          err => console.log(err)
        );
      }
    );
  }
}
