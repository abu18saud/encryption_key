import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent {

  changeLang: boolean = true;
  constructor(public translateService: TranslateService,
    public localStorageService: LocalStorageService,
  ) { }

  changeLangEvent() {
    this.changeLang = !this.changeLang;
    this.translateService.use(this.changeLang == true ? 'ar' : 'en');
    this.localStorageService.setLanguageCode(this.changeLang == true ? 'ar' : 'en');
    // this.loader.loader = true;
    this.localStorageService.setLoader(true);
  }

  ngOnInit(): void {
    this.translateService.currentLang = (this.localStorageService.getLanguageCode() != null) ? this.localStorageService.getLanguageCode()! : 'ar';

    if (this.translateService.currentLang !== null) {
      if (this.translateService.currentLang == 'ar') {
        this.changeLang = true;
      } else {
        this.changeLang = false;
      }
    }
  }
}
