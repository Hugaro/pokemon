import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {

  public next: string;
  public resources: Resource[] = [];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.berriesUrl);
    });
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      (data) => {
        this.resources = this.resources.concat(data.results);
        this.next = data.next;
      },
      (err) => console.log(err.message)
    );
  }
}
