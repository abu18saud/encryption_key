import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleTranslateService {

  constructor(private http: HttpClient) { }

  public getArLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/ar.json");
  }

  public getEnLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/en.json");
  }
}
