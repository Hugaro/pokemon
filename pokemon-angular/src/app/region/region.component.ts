import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from '../models/region.models';
import { ResourceService } from '../service/resource.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public resourceUrl: string;
  public region: Region;

  constructor(private activatedRoute: ActivatedRoute,
    private route: RouteService,
    private service: ResourceService) { }

  public ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    this.route.load().then(
      urls => {
        this.resourceUrl = urls.getUrlName(urls.region, name);
        this.service.getResource<Region>(this.resourceUrl).subscribe(
          data => {this.region = data; console.log(data); }
        );
      }
    );
  }
}
