import { Component, ElementRef, ViewChild } from '@angular/core';
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


  constructor(private ciphersService: CiphersService) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  clear() {
    this.plainText.nativeElement.value = '';
  }

}
