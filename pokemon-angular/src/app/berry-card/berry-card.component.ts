import { Component, Input, OnInit } from '@angular/core';
import { Berry } from '../models/berry.models';
import { Item } from '../models/item.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-berry-card',
  templateUrl: './berry-card.component.html',
  styleUrls: ['./berry-card.component.scss']
})
export class BerryCardComponent implements OnInit {

  @Input() resorceUrl: string;

  public berry: Berry;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.getBerry();
  }

  public getItem (berry: Berry): void {
    this.service.getResource<Item>(berry.item.url).subscribe(
      (data) => {
        berry.item = data;
        this.berry = berry;
      },
      (err) => console.log(err.message)
    );
  }

  public getBerry (): void {
    this.service.getResource<Berry>(this.resorceUrl).subscribe(
      (data) => this.getItem(data),
      (err) => console.log(err.message)
    );
  }
}
