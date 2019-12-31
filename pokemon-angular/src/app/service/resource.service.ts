import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from '../models/page.models';
import { Resource } from '../models/resource.model';

@Injectable({
    providedIn: 'root'
})

export class ResourceService {

    constructor(private http: HttpClient) {}

    public getResources(url: string): Observable<Page<Resource>> {
        return this.http.get<Page<Resource>>(url);
    }

    public getResource<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }
}
