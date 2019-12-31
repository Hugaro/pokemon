import { Component, OnInit } from '@angular/core';
import { WatchService } from '../service/watch.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  public movies: any[] = [];

  constructor(private service: WatchService) {}

  public ngOnInit(): void {
    this.service.getVideosForChanel([]).subscribe(
      lista => {
        console.log(lista);
        for (const element of lista['items']) {
          console.log(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
          this.movies.push(element);
        }
    });
  }
}
