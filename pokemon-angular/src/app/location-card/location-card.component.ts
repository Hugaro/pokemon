import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../models/location.models';
import { ResourceService } from '../service/resource.service';
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  @Input() resourceUrl: string;

  public location: Location;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.service.getResource<Location>(this.resourceUrl).subscribe(
      data => this.location = data,
      err => console.log(err)
    );
  }

}
