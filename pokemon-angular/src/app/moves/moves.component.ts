import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})

export class MovesComponent implements OnInit {

  public resources: Resource[] = [];
  public next: string;

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.movesUrl);
    });
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      data => {
        this.resources = this.resources.concat(data.results);
        this.next = data.next;
      },
      err => console.log(err)
    );
  }
}
