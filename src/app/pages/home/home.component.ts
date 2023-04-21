import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { CiphersService } from 'src/app/services/ciphers.service';

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


  constructor(private ciphersService: CiphersService,
    private algorithmsService: AlgorithmsService,
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
