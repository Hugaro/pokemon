import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  public resources: Resource[] = [];
  public next: string;

  constructor(private service: ResourceService,
              private route: RouteService) {}

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.typesUrl);
    });
  }

  public loadResources(url: string) {
    this.service.getResources(url).subscribe(
      (page) =>  {
        this.resources = this.resources.concat(page.results);
        this.next = page.next;
      },
      (err)  => console.log(err.message)
    );
  }
}
