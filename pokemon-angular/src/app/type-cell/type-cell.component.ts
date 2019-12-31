import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-cell',
  templateUrl: './type-cell.component.html',
  styleUrls: ['./type-cell.component.scss']
})
export class TypeCellComponent implements OnInit {

  @Input() typeName: string;
  @Input() damageLevel: number;

  constructor() { }

  public ngOnInit(): void {}

}
