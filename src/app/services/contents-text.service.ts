import { Injectable } from '@angular/core';
import { Process } from '../models/process.model';
import { HandleTranslateService } from './handle-translate.service';
import { AlgorithmsService } from './algorithms.service';

@Injectable({
  providedIn: 'root'
})
export class ContentsTextService {
  langVar: any = [];
  constructor(private handleTranslateService: HandleTranslateService,
    private algorithmsService: AlgorithmsService) { }

  processText(process: Process): string {
    this.handleTranslateService.getArLangFile().subscribe(res => {
      this.langVar = res;
    });

    let labels = this.langVar['LABELS'];
    let ciphers = this.langVar['CIPHERS'];
    let currentCipher = ciphers[process.algorithm];
    let i = 0;

    let contents = 'النص العادي: *' + process.plain_text + '* \n';
    contents += 'النص بعد التشفير: *' + process.cipher_text + '* \n';
    contents += 'مفتاح التشفير: *' + process.encryption_key + '* \n'
    contents += 'الخوارزمية المستخدمة: *' + currentCipher + '* \n\n';
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
        contents += 'مسافة' + '\n';
      }
    }

    return contents;
  }
}
