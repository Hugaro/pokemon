import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})

export class RegionsComponent implements OnInit {

  public resources: Resource[] = [];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(
      route => {
        const url = route.getUrlPage(route.region);
        this.loadResources(url);
      }
    );
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      data => this.resources = data.results,
      err => console.log(err)
    );
  }
}
