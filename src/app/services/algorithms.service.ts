import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Process } from '../models/process.model';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  keyAfterMax: any;
  alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//, " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"

  constructor(private translateService: TranslateService) { }

  checkRtl(characters: string) {
    if (characters.trim() !== '') {
      let lastChar = characters.slice(characters.length - 1, characters.length);
      var RTL = ['ا', 'أ', 'آ', 'إ', 'ب', 'ث', 'پ', 'ت', 'س', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ك', 'ل', 'م', 'ن', 'و', 'ؤ', 'ء', 'ئ', 'ه', 'ی', 'ي', 'ـ', 'ى', 'ة'];
      return RTL.indexOf(lastChar) > -1;
    } else {
      if (this.translateService.currentLang === 'ar') {
        return true;
      } else {
        return false;
      }
    }
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

    str.split('').forEach(element => {
      if (this.alphabets.indexOf(element) !== -1) {
        resultStr.push(newAlphabets[this.alphabets.indexOf(element)]);
      } else {
        resultStr.push(element);
      }
    });

    return resultStr.join('');
  };


  caesarDecryption(str: string, key: number): string {
    let resultStr: string[] = [];
    str = str.toLocaleUpperCase();
    let newAlphabets: string[] = [];
    let cutAlphabets: string[] = this.alphabets.slice(0, key)
    newAlphabets = this.alphabets.slice(key, this.alphabets.length);
    cutAlphabets.forEach(element => {
      newAlphabets.push(element);
    })

    str.split('').forEach(element => {
      if (this.alphabets.indexOf(element) !== -1) {
        resultStr.push(this.alphabets[newAlphabets.indexOf(element)]);
      } else {
        resultStr.push(element);
      }
    });

    return resultStr.join('');
  };

  //--------------------------------------------------------------------
  monoEncription(str: string, alphabetsKey: string): string {
    let resultStr: string[] = [];
    str = str.toLocaleUpperCase();
    alphabetsKey = alphabetsKey.toLocaleUpperCase();
    let newAlphabets: string[] = alphabetsKey.split('');
    console.log(newAlphabets);

    str.split('').forEach(element => {
      if (this.alphabets.indexOf(element) !== -1) {
        resultStr.push(newAlphabets[this.alphabets.indexOf(element)]);
      } else {
        resultStr.push(element);
      }
    });

    return resultStr.join('');
  };


  monoDecryption(str: string, alphabetsKey: string): string {
    let resultStr: string[] = [];
    str = str.toLocaleUpperCase();
    alphabetsKey = alphabetsKey.toLocaleUpperCase();
    let newAlphabets: string[] = alphabetsKey.split('');
    console.log(newAlphabets);

    str.split('').forEach(element => {
      if (this.alphabets.indexOf(element) !== -1) {
        resultStr.push(this.alphabets[newAlphabets.indexOf(element)]);
      } else {
        resultStr.push(element);
      }
    });

    return resultStr.join('');
  };



  //------------------------------------- Zigzag --------------------------------
  zigzagEncription(str: string, rowsQty: number): string {
    let strArray = str.split('');

    let object = [
      ['A', '', 'd', '', 'l', '', 'a', ''],
      ['', 'b', '', 'u', '', 'l', '', 'h']
    ];

    if (str.length > 6) {
      for (let i = 0; i < rowsQty; i++) {
        for (let a = 0; a < str.length; a++) {
        object.push([strArray[0], '', strArray[2], '', strArray[4]])

        }
      }
    }

    return object.toString();
  }











  //---------------------------------------------------------------------


  getPrimaryAlphabets(): string[] {
    return this.alphabets;
  }

  getNewAlphabets(key: number): string[] {
    let newAlphabets: string[] = [];
    let cutAlphabets: string[] = this.alphabets.slice(0, key)
    newAlphabets = this.alphabets.slice(key, this.alphabets.length);
    cutAlphabets.forEach(element => {
      newAlphabets.push(element);
    });
    return newAlphabets;
  }

  keyAfterMaximum(item: any, process: Process) {
    this.keyAfterMax = this.getPrimaryAlphabets().indexOf(item) + process.encryption_key;
    if (this.keyAfterMax > 25) {
      this.keyAfterMax = this.keyAfterMax - 26;
    }
    return this.keyAfterMax;
  }

}