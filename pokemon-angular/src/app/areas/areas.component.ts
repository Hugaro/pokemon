import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreaComponent implements OnInit {

  public resources: Resource[] = [];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(
      route => this.loadResources(route.areaUrl)
    );
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      data => this.resources = this.resources.concat(data.results),
      err => console.log(err)
    );
  }
}
