import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {

  @Input() movie: any;
  constructor() { }

  ngOnInit() {
  }

}
