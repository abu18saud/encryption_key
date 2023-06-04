import { Injectable } from '@angular/core';
import { Process } from '../models/process.model';
import { HandleTranslateService } from './handle-translate.service';
import { AlgorithmsService } from './algorithms.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ContentsTextService {
  langVar: any = [];
  constructor(private handleTranslateService: HandleTranslateService,
    private translateService: TranslateService,
    private algorithmsService: AlgorithmsService) { }


  getIndexFromAlphapets(item: any) {
    return Number(this.algorithmsService.getPrimaryAlphabets().indexOf(item));
  }

  processShortText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }

    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['PLAIN_TEXT'] + ': *' + plainText + '* \n';
    contents += labels['TEXT_AFTER_ENCRYPTION'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.encryption_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* \n\n';
    contents += "\n\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }

  processText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }


    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['PLAIN_TEXT'] + ': *' + plainText + '* \n';
    contents += labels['TEXT_AFTER_ENCRYPTION'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.encryption_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* \n\n';
    contents += '*' + labels.CURRENT_PROCESS_DETAILS + ":* \n\n\n"
    contents += labels.PRIMARY_ALPHABETS + ": \n\n"
    for (let item of this.algorithmsService.getPrimaryAlphabets()) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + "] ";
      }
    }
    contents += "\n\n";
    contents += labels.SORT_AFTER_OFFSET + ": \n\n"
    for (let item of this.algorithmsService.getNewAlphabets(process.encryption_key)) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key).indexOf(item) + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key).indexOf(item) + "] ";
      }
    }
    contents += "\n\n";
    contents += labels.ENCRYPTION_KEY_LABEL.replaceAll('{{KEY}}', process.encryption_key).replaceAll('<b>', '*').replaceAll('</b>', '*') + ": \n\n"
    for (let item of this.algorithmsService.getPrimaryAlphabets()) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key)[i] + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key)[i] + "] ";
      }
      i++;
    }
    contents += "\n\n";
    contents += labels.HOW_GET_THIS_RESULT + '\n\n';

    for (let item of process.plain_text.toUpperCase().split('')) {
      if (item.trim() !== '') {
        contents += 'C =(' + item + ' + ' + process.encryption_key + ')mod(' +
          this.algorithmsService.getPrimaryAlphabets().length + ')' +
          '= (' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + ' + ' +
          process.encryption_key + ')mod(' +
          this.algorithmsService.getPrimaryAlphabets().length + ') = ' +
          (this.algorithmsService.getPrimaryAlphabets().indexOf(item) +
            process.encryption_key) + ' == ' +
          this.algorithmsService.getPrimaryAlphabets()[this.algorithmsService.keyAfterMaximum(item, process)] + '\n';
      } else {
        contents += labels['SPACE'] + '\n';
      }
    }
    contents += "\n\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }

  processDecryptionText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }


    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['TEXT_AFTER_ENCRYPTION'] + ': *' + plainText + '* \n';
    contents += labels['PLAIN_TEXT'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.encryption_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* (' + labels['DECRYPTION'].replaceAll('ال', '') + ') \n\n';
    contents += '*' + labels.CURRENT_PROCESS_DETAILS + ":* \n\n"
    contents += labels.PRIMARY_ALPHABETS + ": \n\n"
    for (let item of this.algorithmsService.getPrimaryAlphabets()) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + "] ";
      }
    }
    contents += "\n\n";
    // contents += labels.SORT_AFTER_OFFSET + ": \n\n"
    // for (let item of this.algorithmsService.getNewAlphabets(process.encryption_key)) {
    //   if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
    //     contents += '*[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key).indexOf(item) + "]* ";
    //   } else {
    //     contents += '[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key).indexOf(item) + "] ";
    //   }
    // }
    // contents += "\n\n";
    // contents += labels.ENCRYPTION_KEY_LABEL.replaceAll('{{KEY}}', process.encryption_key).replaceAll('<b>', '*').replaceAll('</b>', '*') + ": \n\n"
    // for (let item of this.algorithmsService.getPrimaryAlphabets()) {
    //   if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
    //     contents += '*[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key)[i] + "]* ";
    //   } else {
    //     contents += '[' + item + '=>' + this.algorithmsService.getNewAlphabets(process.encryption_key)[i] + "] ";
    //   }
    //   i++;
    // }
    // contents += "\n\n";
    contents += labels.HOW_GET_THIS_RESULT + '\n';

    for (let item of process.plain_text.toUpperCase().split('')) {
      if (item.trim() !== '') {
        contents += 'C =(' + item + ' - ' + process.encryption_key + ')mod(' +
          this.algorithmsService.getPrimaryAlphabets().length + ') = (' +
          this.algorithmsService.getPrimaryAlphabets().indexOf(item) + ' - ' +
          process.encryption_key + ')mod(' +
          this.algorithmsService.getPrimaryAlphabets().length + ') = ' +
          (this.algorithmsService.getPrimaryAlphabets().indexOf(item) -
            process.encryption_key) + ' == ' +
          this.algorithmsService.getPrimaryAlphabets()[(this.algorithmsService.getPrimaryAlphabets().indexOf(item) -
            process.encryption_key)] + '\n';
      } else {
        contents += labels['SPACE'] + '\n';
      }
    }
    contents += "\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }

  //-------------------- Mono -----------------------------------
  processMonoShortText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }

    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['PLAIN_TEXT'] + ': *' + plainText + '* \n';
    contents += labels['TEXT_AFTER_ENCRYPTION'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.encryption_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* \n\n';
    contents += "\n\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }

  processEncryptionMonoText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }

    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['PLAIN_TEXT'] + ': *' + plainText + '* \n';
    contents += labels['TEXT_AFTER_ENCRYPTION'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.alphabet_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* \n\n';
    contents += '*' + labels.CURRENT_PROCESS_DETAILS + ":* \n\n\n"
    contents += labels.PRIMARY_ALPHABETS + ": \n\n"
    for (let item of this.algorithmsService.getPrimaryAlphabets()) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + '=>' + process.alphabet_key.split('')[i] + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + '=>' + process.alphabet_key.split('')[i] + "] ";
      }
      i++;
    }
    contents += "\n\n";
    contents += labels.HOW_GET_THIS_RESULT + '\n\n';

    for (let item of process.plain_text.toUpperCase().split('')) {
      if (item.trim() !== '') {
        contents += item + " => " + this.getIndexFromAlphapets(item) + " = " +
          process.alphabet_key.toUpperCase().split('')[this.getIndexFromAlphapets(item)] + '\n';
      } else {
        contents += labels['SPACE'] + '\n';
      }
    }
    contents += "\n\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }

  processDecryptionMonoText(process: Process): string {
    if (this.translateService.currentLang === "ar") {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        this.langVar = res;
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        this.langVar = res;
      });
    }


    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let plainText = (process.switch_case === true) ? process.plain_text.toLocaleUpperCase() : process.plain_text.toLocaleLowerCase();
    let cipherText = (process.switch_case === true) ? process.cipher_text.toLocaleUpperCase() : process.cipher_text.toLocaleLowerCase();

    let contents = labels['TEXT_AFTER_ENCRYPTION'] + ': *' + plainText + '* \n';
    contents += labels['PLAIN_TEXT'] + ': *' + cipherText + '* \n';
    contents += labels['ENCRYPTION_KEY'] + ': *' + process.alphabet_key + '* \n'
    contents += labels['THE_ALGORITHM_USED'] + ': *' + currentCipher + '* (' + labels['DECRYPTION'].replaceAll('ال', '') + ') \n\n';
    contents += '*' + labels.CURRENT_PROCESS_DETAILS + ":* \n\n"
    contents += labels.PRIMARY_ALPHABETS + ": \n\n"
    for (let item of process.alphabet_key.split('')) {
      if (process.plain_text.toUpperCase().split('').indexOf(item.trim()) !== -1) {
        contents += '*[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + '=>' + this.algorithmsService.getPrimaryAlphabets()[i] + "]* ";
      } else {
        contents += '[' + item + '=>' + this.algorithmsService.getPrimaryAlphabets().indexOf(item) + '=>' + this.algorithmsService.getPrimaryAlphabets()[i] + "] ";
      }
      i++;
    }
    contents += "\n\n";
    contents += labels.HOW_GET_THIS_RESULT + '\n';

    for (let item of process.plain_text.toUpperCase().split('')) {
      if (item.trim() !== '') {
        contents += item + " => " + process.alphabet_key.toUpperCase().split('').indexOf(item) + " = " +
          this.algorithmsService.getPrimaryAlphabets()[process.alphabet_key.toUpperCase().split('').indexOf(item)] + "\n";
      } else {
        contents += labels['SPACE'] + '\n';
      }
    }
    contents += "\n";
    contents += this.footerOfContents(this.langVar);
    return contents;
  }





  footerOfContents(langVar: any): string {
    let labels = langVar['LABELS'];
    let contents = labels["VISIT_OUR_WEBSITE"] + ":\n https://encryption-key.netlify.app \n\n";
    contents += labels["GREETINGS"] + ":\n";
    contents += "*" + labels["TEAM"] + " " + langVar["WEBSITE_NAME"] + "*";
    return contents;
  }
}
