import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {

  constructor(private service: ResourceService,
              private router: RouteService) { }

  public resources: Resource[] = [];

  public ngOnInit(): void {
    this.router.load().then(
      route => {
        const url = route.getUrlPage(route.generation);
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
