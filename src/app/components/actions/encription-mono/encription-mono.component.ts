import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { CopyService } from 'src/app/services/copy.service';
import { ProcessService } from 'src/app/services/process.service';
import { ShareLinksService } from 'src/app/services/share-links.service';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { TranslateService } from '@ngx-translate/core';
import { ContentsTextService } from 'src/app/services/contents-text.service';

@Component({
  selector: 'app-encription-mono',
  templateUrl: './encription-mono.component.html',
  styleUrls: ['./encription-mono.component.scss']
})
export class EncriptionMonoComponent {
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
    // this.copyService.copyEncryptionMonoProcess(this.process, '', false);
  }

  ngOnInit() {
    // console.log(this.cipher);
  }

  encrypt() {
    this.process.cipher_text = this.algorithmsService.monoEncription(this.process.plain_text, this.process.alphabet_key);
  }

  getIndexFromAlphapets(item: any) {
    return Number(this.algorithmsService.getPrimaryAlphabets().indexOf(item));
  }

  encryptWithAddToHistory() {
    this.encrypt();
    this.processService.addNewItem(this.process);
  }

  copyProcessAction(){
    this.process.algorithm = "MONO_ALPHAPETIC";
    this.copyService.copyEncryptionMonoProcess(this.process, 'COPY_PROCESS', true)
  }

  clear() {
    this.plainText.nativeElement.value = '';
    this.process.plain_text = '';
    this.process.cipher_text = '';
  }
}
