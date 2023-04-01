import { Injectable } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public canon(): void {
    confetti({
      angle: this.randomInRange(55, 125),
      spread: this.randomInRange(50, 70),
      particleCount: this.randomInRange(50, 100),
      origin: { y: 0.6 }
    });
  }

  confetti() {
    confetti.create()({
      shapes: ['square'],
      particleCount: 100,
      spread: 90,
      origin: {
        y: (1),
        x: (0.5)
      }
    });
  }

  private randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }


}
