import { Component, Input, OnInit } from '@angular/core';
// import { Stat } from '../models/stat.models';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {

  @Input() name: string;
  @Input() value: number;

  // public stat: Stat;

  constructor(
    // private service: ResourceService
    ) { }

  public ngOnInit(): void {
    // this.service.getResource<Stat>(this.resourceUrl).subscribe(
    //   (data) => this.stat = data,
    //   (err) => console.log(err.message)
    // );
  }
}
