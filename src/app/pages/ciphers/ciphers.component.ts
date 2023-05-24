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

  title: string = "";
  description: string = "";
  ref: string = "";

  constructor(
    private ciphersService: CiphersService,
    public translateService: TranslateService
  ) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }


  ngOnInit() {
    this.title = (this.translateService.currentLang === "ar") ? this.items[0].ar_name : this.items[0].en_name;
    this.description = (this.translateService.currentLang === "ar") ? this.items[0].ar_description : this.items[0].en_description;
    this.ref = (this.translateService.currentLang === "ar") ? this.items[0].ref : this.items[0].ref;
  }



}
