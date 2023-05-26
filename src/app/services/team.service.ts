import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public url = environment.url + '/assets/data/';
  constructor(public http: HttpClient) { }

  public getItems(): Observable<any> {
    return this.http.get<any>(this.url + 'work-team.json');
  }
}

export const environment = {
  production: false,
  url: ''
};
