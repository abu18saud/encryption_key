import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { WishlistService } from './wishlist.service';

@Injectable({
  providedIn: 'root'
})
export class ShareLinksService {
  data: any;
  i: any = 1;
  newLine: string = "%0A";
  line: string = "ــــــــــــــــــــــــــــــــــــــــ" + this.newLine;

  contents: string = "";

  constructor(private http: HttpClient,
    private wishlistService: WishlistService,
    private translateService: TranslateService) { }

  public getArLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/ar.json");
  }

  public getEnLangFile(): Observable<any> {
    return this.http.get("./assets/i18n/en.json");
  }

  getData(items: any): Observable<string> {
    this.contents = "";
    var subject = new Subject<string>();
    let allData = (this.translateService.currentLang === "ar") ? this.getArLangFile() : this.getEnLangFile();

    allData.subscribe(data => {
      const d = new Date();
      this.contents += "<b>" + data['BUTTONS'].MY_WISHLIST + " 🛒</b>" + this.newLine;
      this.contents += "<i>" + data['LABELS'].WISHLIST + "</i>" + this.newLine + this.newLine;
      this.contents += this.line;

      let i = 1;

      for (let element of items) {
        this.contents += i + "- " + ((this.translateService.currentLang === "ar") ? element.ar_name : element.en_name) + " " + element.icon + this.newLine + "=> " + data['TABLES'].QUANTITY + " " + element.quantity.toString()
          .replaceAll("1", "1️⃣")
          .replaceAll("2", "2️⃣")
          .replaceAll("3", "3️⃣")
          .replaceAll("4", "4️⃣")
          .replaceAll("5", "5️⃣")
          .replaceAll("6", "6️⃣")
          .replaceAll("7", "7️⃣")
          .replaceAll("8", "8️⃣")
          .replaceAll("9", "9️⃣")
          + this.newLine + " => " + data['TABLES'].UNIT_PRICE + ": " + element.current_price + " " + data["LABELS"].CURRENCY + this.newLine;
        this.contents += this.line;
        i++;
      }
      this.contents += "<b>" + data['LABELS'].SHARED_TIME + " ⌚️:</b> " + this.newLine + d.toLocaleString() + this.newLine;
      this.contents += "<b>" + data['LABELS'].TOTAL_PRICE + ":</b> " + this.newLine + this.wishlistService.totalOfWishlist().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " " + data["LABELS"].CURRENCY + this.newLine;
      this.contents += "<b>" + data['LABELS'].VAT + ":</b> " + this.newLine + this.wishlistService.vatOfTotal().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " " + data["LABELS"].CURRENCY + this.newLine;
      this.contents += "<b>" + data['LABELS'].TOTAL_SUMMATION + ":</b> " + this.newLine + this.wishlistService.totalWithVat().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " " + data["LABELS"].CURRENCY + this.newLine;
      this.contents += this.line;
      this.contents += "<b>" + data['LABELS'].WORKING_HOURS + ":</b> " + this.newLine;
      this.contents += "" + data['RANGE'].FROM + " 7 " + data['LABELS'].AM + " " + data['RANGE'].TO + " 2 " + data['LABELS'].AM + this.newLine;
      this.contents += "<b>" + data['LABELS'].WEBSITE + ":</b> " + this.newLine;
      this.contents += "www.al-yahya.sa" + this.newLine;
      this.contents += "<b>" + data['LABELS'].TELEPHONE + ":</b> " + this.newLine;
      this.contents += "0135850030" + this.newLine;
      this.contents += "<b>" + data['LABELS'].EMAIL + ":</b> " + this.newLine;
      this.contents += "Customer.care@al-yahya.sa" + this.newLine + this.newLine;
      this.contents += "<b>" + data['LABELS'].GREETINGS + " ...</b> " + this.newLine;
      this.contents += "<i>" + data['LABELS'].TEAM + " " + data['WEBSITE_NAME'] + "</i>" + this.newLine
      subject.next(this.contents);
    });

    return subject.asObservable();
  }

  getShareInfo() {
    this.contents = "";
    var subject = new Subject<string>();
    let allData = (this.translateService.currentLang === "ar") ? this.getArLangFile() : this.getEnLangFile();

    allData.subscribe(data => {
      this.contents += "" + data['BUTTONS'].MY_WISHLIST + " 🛒" + this.newLine;
      this.contents += data['SHARE_BUTTONS'].WISHLIST;

      subject.next(this.contents);
    });
    return subject.asObservable();
  }


  shareWishlistWhatsapp(items: any) {
    let link = "https://api.whatsapp.com/send?text=";
    this.getData(items).subscribe((r) => {
      window.open(link + r.replaceAll('<b>', '*').replaceAll('</b>', '*').replaceAll('<i>', '_').replaceAll('</i>', '_'), '_blank');
    });
  }

  shareWishlistTelegram() {
    let link = "https://t.me/share/url?url=al-yahya.sa&text={{message}}";
    // let link = "tg://msg?text={{message}}&to=+966508532127";

    this.getShareInfo().subscribe((r) => {
      window.open(link.replace("{{message}}", r));//.replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('<i>', '').replaceAll('</i>', '').replaceAll(this.newLine, "\n")
    });
  }

  shareWishlistTwitter() {
    let link = "https://twitter.com/intent/tweet?text={{message}}";

    this.getShareInfo().subscribe((r) => {
      window.open(link.replace("{{message}}", r.replaceAll(this.line, '').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('<i>', '').replaceAll('</i>', '').replaceAll(this.newLine, "\n")));//
    });
  }

  shareWishlistFacebook() {
    let link = "https://www.facebook.com/sharer/sharer.php?u=https://al-yahya.sa&t={{message}}";

    this.getShareInfo().subscribe((r) => {
      window.open(link.replace("{{message}}", r.replaceAll(this.line, '').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('<i>', '').replaceAll('</i>', '').replaceAll(this.newLine, "\n")));//
    });
  }

  contactWithSupport() {
    window.open('https://wa.me/966508532127', '_blank');
  }
}
