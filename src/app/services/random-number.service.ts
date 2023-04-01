import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  randomRange(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start) + start);
  }

  randomFromDate(): number {
    let date = new Date();

    return date.getTime();
  }
}
