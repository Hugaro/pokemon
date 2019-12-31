import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../models/type.model';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss']
})
export class TypeCardComponent implements OnInit {

  @Input() resourceUrl: string;
  public type: Type;

  constructor(private service: ResourceService) { }

  public ngOnInit(): void {
    this.service.getResource<Type>(this.resourceUrl).subscribe(
      (data) => this.type = data,
      (err)  => console.log(err.message)
    );
  }
}
