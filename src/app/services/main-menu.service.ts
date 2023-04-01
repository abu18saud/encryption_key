import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  public url = environment.url + '/assets/data/';

  constructor(public http: HttpClient) { }

  public getMainMenu(): Observable<any> {
    return this.http.get<any>(this.url + 'main-menu.json');
  }
}

export const environment = {
  production: false,
  url: ''
};
