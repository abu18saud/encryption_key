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
  public setWishlist(items: any) {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }

  public getWishlist(): any {
    return JSON.parse(localStorage.getItem('wishlist') || '{}');
  }

  public removeWithlist() {
    localStorage.removeItem('wishlist');
  }

}
