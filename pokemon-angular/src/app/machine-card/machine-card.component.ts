import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.models';
import { Machine } from '../models/machine.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.scss']
})
export class MachineCardComponent implements OnInit {

  @Input() resourceUrl: string;

  public machine: Machine;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.getMachine(this.resourceUrl);
  }

  private getMachine(url: string) {
    this.service.getResource<Machine>(url).subscribe(
      data => this.getItem(data),
      err => console.log(err)
    );
  }

  private getItem(machine: Machine) {
    console.log('item: ', machine.item.url);
    this.service.getResource<Item>(machine.item.url).subscribe(
      data => {
        machine.item = data;
        this.machine = machine;
      },
      err => console.log(err)
    );
  }
}
