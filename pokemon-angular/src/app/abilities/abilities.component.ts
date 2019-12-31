import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})

export class AbilitiesComponent implements OnInit {

  public resources: Resource[] = [];
  public next: string;

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.abilitiesUrl);
    });
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      (page) =>  {
        this.resources = this.resources.concat(page.results);
        this.next = page.next;
      },
      (err)  => console.log(err.message)
    );
  }
}
