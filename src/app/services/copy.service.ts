import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';
import { TranslateService } from '@ngx-translate/core';
import { HandleTranslateService } from './handle-translate.service';
import { Process } from '../models/process.model';
import { ContentsTextService } from './contents-text.service';

@Injectable({
  providedIn: 'root'
})
export class CopyService {
  value: string = "";
  constructor(private snackBarService: SnackBarService,
    private translateService: TranslateService,
    private handleTranslateService: HandleTranslateService,
    private contentsTextService: ContentsTextService) { }

  copyCipherTextResult(val: string, successMessageKey: string, notification: boolean) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.translateService.currentLang === 'ar') {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarAr(successMessage, "");
        }
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarEn(successMessage, "");
        }
      });
    }
  }

  async copyCipherTextProcess(process: Process, successMessageKey: string, notification: boolean) {
    this.value = await this.contentsTextService.processText(process);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.translateService.currentLang === 'ar') {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarAr(successMessage, "");
        }
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarEn(successMessage, "");
        }
      });
    }
  }

  async copyDecryptionTextProcess(process: Process, successMessageKey: string, notification: boolean) {
    this.value = await this.contentsTextService.processDecryptionText(process);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.translateService.currentLang === 'ar') {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];

        if (notification === true) {
          this.snackBarService.openSnackBarAr(successMessage, "");
        }
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarEn(successMessage, "");
        }
      });
    }
  }
  //--------------------------------------------------------------
  async copyEncryptionMonoProcess(process: Process, successMessageKey: string, notification: boolean) {
    this.value = await this.contentsTextService.processEncryptionMonoText(process);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.translateService.currentLang === 'ar') {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];

        if (notification === true) {
          this.snackBarService.openSnackBarAr(successMessage, "");
        }
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];
        if (notification === true) {
          this.snackBarService.openSnackBarEn(successMessage, "");
        }
      });
    }
  }

  async copyDecryptionMonoProcess(process: Process, successMessageKey: string, notification: boolean) {
    this.value = await this.contentsTextService.processDecryptionMonoText(process);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.translateService.currentLang === 'ar') {
      this.handleTranslateService.getArLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];

        if (notification === true) {
          this.snackBarService.openSnackBarAr(successMessage, "");
        }
      });
    } else {
      this.handleTranslateService.getEnLangFile().subscribe(res => {
        let success = res['SUCCESS'];
        let successMessage = success[successMessageKey];

        if (notification === true) {
          this.snackBarService.openSnackBarEn(successMessage, "");
        }
      });
    }
  }
}
