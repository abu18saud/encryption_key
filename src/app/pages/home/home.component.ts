import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Process } from 'src/app/models/process.model';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { CiphersService } from 'src/app/services/ciphers.service';
import { CopyService } from 'src/app/services/copy.service';
import { ProcessService } from 'src/app/services/process.service';
import { ShareLinksService } from 'src/app/services/share-links.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('plainText') plainText: ElementRef<HTMLInputElement>;
  @ViewChild('copyProcess') copyProcess: ElementRef<HTMLInputElement>;
  @ViewChild('copyResult') copyResult: ElementRef<HTMLInputElement>;

  process: Process = new Process();

  currentCipher: any;
  items: any = [];

  constructor(
    private ciphersService: CiphersService,
    public copyService: CopyService,
    public algorithmsService: AlgorithmsService,
    public shareLinkService: ShareLinksService,
    public processService: ProcessService,
    public translateService: TranslateService
  ) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
      this.currentCipher = res[0];
    });
    this.copyService.copyCipherTextProcess(this.process, '');
  }

ngOnInit(){
}


  currentCipherMethod(event: any) {
    this.currentCipher = event;
    this.process.algorithm = event.text_id;
  }

}
