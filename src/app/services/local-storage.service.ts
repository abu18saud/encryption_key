import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  //----------------------------------------

  public setLanguageCode(currentLang: any) {
    localStorage.setItem('currentLanguage', currentLang);
  }

  public getLanguageCode(): string {
    return localStorage.getItem('currentLanguage')!;
  }

  //---------------------------------------
  public setLoader(onOrOffLoader: boolean) {
    localStorage.setItem('loader', onOrOffLoader.toString());
  }

  public getLoader(): boolean {
    if (localStorage.getItem('loader')! !== '') {
      // alert(localStorage.getItem('loader')!);
      return Boolean(localStorage.getItem('loader')!);
    } else {
      return true;
    }
  }
  //---------------------------------------
  public setPocesses(items: any) {
    localStorage.setItem('pocesses', JSON.stringify(items));
  }

  public getPocesses(): any {
    return JSON.parse(localStorage.getItem('pocesses') || '{}');
  }

  public removePocesses() {
    localStorage.removeItem('pocesses');
  }

}
