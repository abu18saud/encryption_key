import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { retry } from 'rxjs';
import { Process } from 'src/app/models/process.model';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { CiphersService } from 'src/app/services/ciphers.service';
import { ShareLinksService } from 'src/app/services/share-links.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('plainText') plainText: ElementRef<HTMLInputElement>;
  process: Process = new Process();
  items: any = [];
  keyAfterMax: number = 0;

  constructor(private ciphersService: CiphersService,
    public algorithmsService: AlgorithmsService,
    public shareLinkService: ShareLinksService,
    public translateService: TranslateService) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  encrypt() {
    this.process.cipher_text = this.algorithmsService.caesarCipher(this.process.plain_text, this.process.encryption_key);
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
