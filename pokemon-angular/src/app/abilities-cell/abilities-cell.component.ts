
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities-cell',
  templateUrl: './abilities-cell.component.html',
  styleUrls: ['./abilities-cell.component.scss']
})
export class AbilitiesCellComponent implements OnInit {

  @Input() abilityName: string;

  public ngOnInit(): void { }

}
