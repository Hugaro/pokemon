import { Component, Input, OnInit } from '@angular/core';
import { Move } from '../models/move.models';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-move-card',
  templateUrl: './move-card.component.html',
  styleUrls: ['./move-card.component.scss']
})
export class MoveCardComponent implements OnInit {

  constructor(private service: ResourceService) { }

  @Input() resourceUrl: string;
  public move: Move;

  public ngOnInit(): void {
    this.service.getResource<Move>(this.resourceUrl).subscribe(
      data => this.move = data,
      err => console.log(err)
    );
  }
}
