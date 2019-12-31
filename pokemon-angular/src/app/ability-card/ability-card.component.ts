import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../models/ability.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.scss']
})
export class AbilitiesCardComponent implements OnInit {

  @Input() resourceUrl: string;

  public ability: Ability;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.service.getResource<Ability>(this.resourceUrl).subscribe(
      (data) => this. ability = data,
      (err) => console.log(err.message)
    );
  }
}
