import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//, " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"

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

  caesarCipher(str: string, key: number): string {
    let resultStr: string[] = [];
    str = str.toLocaleUpperCase();
    let newAlphabets: string[] = [];
    let cutAlphabets: string[] = this.alphabets.slice(0, key)
    newAlphabets = this.alphabets.slice(key, this.alphabets.length);
    cutAlphabets.forEach(element => {
      newAlphabets.push(element);
    })
    console.log(newAlphabets);

    str.split('').forEach(element => {
      console.log(newAlphabets[newAlphabets.indexOf(element)]);
      resultStr.push(newAlphabets[this.alphabets.indexOf(element)]);
    });

    // for (let i = 0; i <= str.length; ++i) {
    //   console.log(str[i]);
    //   resultStr.push(newAlphabets[newAlphabets.indexOf(str[i])]);
    // }
    return resultStr.join('');
  };

}