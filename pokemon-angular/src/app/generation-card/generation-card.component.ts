import { Component, Input, OnInit } from '@angular/core';
import { Generation } from '../models/generation.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent implements OnInit {

  @Input() resourceUrl: string;

  public generation: Generation;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.service.getResource<Generation>(this.resourceUrl).subscribe(
      data => this.generation = data,
      err => console.log(err)
    );
  }

}
