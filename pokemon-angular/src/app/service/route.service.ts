import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../models/config.models';

@Injectable({
    providedIn: 'root'
})

export class RouteService {

    private host = '//' + location.host + '/';
    private configFile = 'assets/config.json';

    constructor(private http: HttpClient) {}

    public load(): Promise<Route> {
        return new Promise((resolve, reject) => {
            this.http.get(this.host + this.configFile).subscribe(
                data => {
                    resolve(new Route(data));
                },
                err => reject(err)
            );
        });
    }
}
