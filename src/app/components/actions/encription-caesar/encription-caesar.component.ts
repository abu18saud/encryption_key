import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { CopyService } from 'src/app/services/copy.service';
import { ProcessService } from 'src/app/services/process.service';
import { ShareLinksService } from 'src/app/services/share-links.service';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { TranslateService } from '@ngx-translate/core';
import { ContentsTextService } from 'src/app/services/contents-text.service';

@Component({
  selector: 'app-encription-caesar',
  templateUrl: './encription-caesar.component.html',
  styleUrls: ['./encription-caesar.component.scss']
})
export class EncriptionCaesarComponent {

  @ViewChild('plainText') plainText: ElementRef<HTMLInputElement>;
  @ViewChild('copyProcess') copyProcess: ElementRef<HTMLInputElement>;
  @ViewChild('copyResult') copyResult: ElementRef<HTMLInputElement>;
  @Input('cipher') cipher: any;
  process: Process = new Process();
  items: any = [];
  keyAfterMax: number = 0;


  constructor(
    public contentsTextService: ContentsTextService,
    public copyService: CopyService,
    public algorithmsService: AlgorithmsService,
    public shareLinkService: ShareLinksService,
    public processService: ProcessService,
    public translateService: TranslateService
  ) {
    this.copyService.copyCipherTextProcess(this.process, '');
  }

  encrypt() {
    this.process.cipher_text = this.algorithmsService.caesarCipher(this.process.plain_text, this.process.encryption_key);
  }

  encryptWithAddToHistory() {
    this.encrypt();
    this.processService.addNewItem(this.process);
  }

  keyAfterMaximum(item: any) {
    this.keyAfterMax = this.algorithmsService.getPrimaryAlphabets().indexOf(item) + this.process.encryption_key;
    if (this.keyAfterMax > 25) {
      this.keyAfterMax = this.keyAfterMax - 26;
    }
    return this.keyAfterMax;
  }

  clear() {
    this.plainText.nativeElement.value = '';
    this.process.plain_text = '';
    this.process.cipher_text = '';
  }


}
