import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {

  public next: string;
  public resources: Resource[] = [];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(
      route => this.loadResources(route.statsUrl)
    );
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      (data) => {
        this.resources = data.results;
        this.next = data.next;
      },
      (err) => console.log(err.message)
    );
  }
}
