import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public resources: Resource[];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(
      route => this.loadResources(route.locationUrl)
      );
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      data => this.resources = data.results,
      err => console.log(err)
    );
  }
}
