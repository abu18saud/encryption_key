import { Injectable } from '@angular/core';
import { NgxPrintElementService } from 'ngx-print-element';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(public print: NgxPrintElementService,
    private http: HttpClient,
    private translateService: TranslateService
  ) { }

  public getArLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/ar.json");
  }

  public getEnLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/en.json");
  }


  printWishlist(title: string, footer: string) {
    
    let config = {
      printMode: 'template-popup', // template
      popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes,direction:rtl',
      pageTitle: title,
      templateString: '<header>' + title + '</header><br>{{printBody}}<br><footer>' + footer + '</footer>',
      stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
      styles: ['@font-face {font-family: \'Bukra-Regular\'; src: url(\'../../../assets/fonts/29LTBukraRegular3.otf\') format(\'truetype\'); } *{ font-family: \'Bukra-Regular\' !important; } td { padding:0 1rem 0 1rem !important; border: 1px solid black; color: black; }', 'table { border: 1px solid black; color: black }', 'header, table, footer { direction: rtl; margin: auto; text-align: center; }']
    };

    return config;
  }

  printWishlistAr() { 
    let header = 'قائمة رغباتي من أسواق اليحيى للمواد الغذائية';
    let footer = 'أوقات الدوام: <br> 7 ص - 2 ص <br><br> الموقع الإلكتروني: <br> <a href="https://al-yahya.sa" title="زوروا موقعنا">www.al-yahya.sa</a>' +
      '<br><br> الهاتف الثابت:<br> 0135850030 <br><br> البريد الإلكتروني:<br> <a href="mailto:Customer.care@al-yahya.sa"> Customer.care@al-yahya.sa</a>'+
      '<br><br><hr> <b>تقبلوا فائق تحياتنا ...</b><br> فريق عمل أسواق اليحيى للمواد الغذائية';
    
    let config = {
      printMode: 'template-popup', // template
      popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes,direction:rtl',
      pageTitle: header,
      templateString: '<header>' + header + '</header><br>{{printBody}}<br><footer>' + footer + '</footer>',
      stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
      styles: ['@font-face {font-family: \'Bukra-Regular\'; src: url(\'../../../assets/fonts/29LTBukraRegular3.otf\') format(\'truetype\'); } *{ font-family: \'Bukra-Regular\' !important; } td { padding:0 1rem 0 1rem !important; border: 1px solid black; color: black; } input { color: black !important; }', 'table { border: 1px solid black; color: black }', 'header, table, footer, input, i { direction: rtl; margin: auto; text-align: center; }']
    };

    return config;
  }  

  printWishlistEn() { 
    let header = 'My Wishlist from Al Yahya Foodstuff Markets';
    let footer = 'Working hours: <br> 7 am - 2 am <br><br> Website: <br> <a href="https://al-yahya.sa" title="Visit our website">www.al-yahya.sa</a>' +
      '<br><br> Landline:<br> 0135850030 <br><br> Email:<br> <a href="mailto:Customer.care@al-yahya.sa"> Customer.care@al-yahya.sa</a>'+
      '<br><br><hr> <b>Please accept our highest regards ...</b><br> Al-Yahya Foodstuff Markets team';
    
    let config = {
      printMode: 'template-popup', // template
      popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes,direction:rtl',
      pageTitle: header,
      templateString: '<header>' + header + '</header><br>{{printBody}}<br><footer>' + footer + '</footer>',
      stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
      styles: ['@font-face {font-family: \'Bukra-Regular\'; src: url(\'../../../assets/fonts/29LTBukraRegular3.otf\') format(\'truetype\'); } *{ font-family: \'Bukra-Regular\' !important; } td { padding:0 1rem 0 1rem !important; border: 1px solid black; color: black; } input { color: black !important; }', 'table { border: 1px solid black; color: black }', 'header, table, footer, input, i { direction: ltr; margin: auto; text-align: center; }']
    };

    return config;
  }  


}
