import { Component, Input, OnInit } from '@angular/core';
import { resource } from 'selenium-webdriver/http';
import { Region } from '../models/region.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss']
})

export class RegionCardComponent implements OnInit {

  @Input() resourceUrl: string;
  @Input() resource: Region;

  public region: Region;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    if (this.resource) {
      this.region = this.resource;
    } else {
      this.loadResource();
    }
  }
  public loadResource() {
    this.service.getResource<Region>(this.resourceUrl).subscribe(
      data => this.region = data,
      err => console.log(err)
    );
  }
}
