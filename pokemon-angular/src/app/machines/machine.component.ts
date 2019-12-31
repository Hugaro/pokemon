import { Component, OnInit } from '@angular/core';
import { Machine } from '../models/machine.models';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  public next: string;
  public resources: Resource[] = [];

  constructor(private service: ResourceService,
              private route: RouteService) { }

  public ngOnInit(): void {
    this.route.load().then(route => {
      this.loadResources(route.machinesUrl);
    });
  }

  public loadResources(url: string): void {
    this.service.getResources(url).subscribe(
      data => {
        this.loadMachine(data.results);
        if (data.next) {
          this.loadResources(data.next);
        }
        this.next = data.next;
      },
      err => console.log(err)
    );
  }

  private loadMachine(resources: Resource[]): void {
    for (const resource of resources) {
      this.service.getResource<Machine>(resource.url).subscribe(
        data => {
          resource.name = data.item.name;
          if (this.resources.find(x => x.name === data.item.name) === undefined) {
            console.log('i put');
            this.resources.push(resource);
          }
        },
        err => console.log(err)
      );
    }
  }
}
