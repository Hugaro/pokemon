import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {

  public resources: Resource[] = [];
  public next: string;

  constructor(private service: ResourceService,
              private route: RouteService) {}

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.getUrlPage(route.pokemon));
    });
  }

  public loadResources(url: string) {
    this.service.getResources(url).subscribe(
      (page) =>  {
        this.resources = this.resources.concat(page.results);
        this.next = page.next;
        // if (this.next) {
        //   this.loadResources(this.next);
        // }
      },
      (err)  => console.log(err.message)
    );
  }
}
