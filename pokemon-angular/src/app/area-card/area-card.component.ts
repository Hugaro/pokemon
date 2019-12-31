import { Component, Input, OnInit } from '@angular/core';
import { Area } from '../models/area.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  @Input() resourceUrl: string;

  public area: Area;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.service.getResource<Area>(this.resourceUrl).subscribe(
      data => this.area = data,
      err => console.log(err)
    );
  }
}
