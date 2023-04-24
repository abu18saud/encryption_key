import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  items: any = [];
  isChecked = true;

  source: string = '';
  destination: string = 'جار فك التشفير ...';
  key: number = 1;
  upper:boolean = true;


  constructor(private ciphersService: CiphersService,
    public algorithmsService: AlgorithmsService,
    public shareLinkService: ShareLinksService,
    public translateService: TranslateService) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  decrypt() {
    this.destination = this.algorithmsService.caesarCipher(this.source, this.key);
  }

  clear() {
    this.plainText.nativeElement.value = '';
  }



}
