import { Component } from '@angular/core';
import { CiphersService } from 'src/app/services/ciphers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any = [];


  constructor(private ciphersService: CiphersService) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
    });
  }

}
