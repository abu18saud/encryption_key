import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public url = environment.url + '/assets/data/';

  constructor(public http: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.http.get<any>(this.url + 'categories.json');
  }
}

export const environment = {
  production: false,
  url: ''
};