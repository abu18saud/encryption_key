import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CiphersService } from 'src/app/services/ciphers.service';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.scss']
})
export class CiphersComponent {
  items: any = [];

  constructor(
    private ciphersService: CiphersService,
    public translateService: TranslateService
  ) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }



}
