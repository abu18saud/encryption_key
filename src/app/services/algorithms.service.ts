import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  resultStr:any = [];
  constructor() { }

  caesarCipherFaild(str: string): string {
    str = str.toLocaleUpperCase();
    str = str + 'd';

    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

    let alphabets13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

    let resultStr = [];
    for (let i = 0; i <= str.length; i++) {
      for (let j = 0; j <= alphabets.length; j++) {
        if (str[i] === alphabets[j]) {
          resultStr.push(alphabets13[j]);
        }
      }
    }
    return resultStr.join('');
  };

  caesarCipher(str: string): string {
    str = str.toLocaleUpperCase();
    let key = 3;

    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//, " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"


this.resultStr = [];
    for (let i = 0; i <= str.length; ++i) {
      this.resultStr.push(alphabets[alphabets.indexOf(str[i])]);
    }
    return this.resultStr.join('');
  };

}
