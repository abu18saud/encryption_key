import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  getScrollPosition(header: any, btnBackToTop: any): number {
    if (window.pageYOffset > 130) {
      header.nativeElement.setAttribute('style', 'display: fixed; top: 0;')
      btnBackToTop.nativeElement.setAttribute('style', 'display: block;')
    } else {
      header.nativeElement.setAttribute('style', 'display: fixed;');
      btnBackToTop.nativeElement.setAttribute('style', 'display: none;')
    }
    return window.pageYOffset;
  }

  backToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
