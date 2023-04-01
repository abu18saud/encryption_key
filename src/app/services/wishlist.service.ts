import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  withlist: any = [];

  constructor(private localStorageService: LocalStorageService) { }

  addNewItem(newitem: any) {
    if (this.localStorageService.getWishlist().length === 0) {
      this.withlist = [];
    }
    this.withlist.push(newitem);
    console.log(this.withlist);
    this.localStorageService.setWishlist(this.withlist);
  }

  updateWishlist(items: any) {
    this.localStorageService.setWishlist(items);
  }

  getAllItems() {
    return this.localStorageService.getWishlist();
  }

  existItem(id: number) {
    return (this.getAllItems().find((a: any) => a.id === id) !== undefined) ? true : false;
  }

  getTotalOfItems(): number {
    return this.localStorageService.getWishlist().length;
  }

  totalOfWishlist(): number {
    let sum = 0;
    this.getAllItems().forEach((element: any) => {
      sum += (element.current_price * element.quantity);
    });
    return sum;
  }

  vatOfTotal() {
    let vat = this.totalOfWishlist() * (15 / 100);
    return vat;
  }

  totalWithVat() {
    let total = this.totalOfWishlist() + this.vatOfTotal();
    return total;
  }

  deleteAll() {
    this.localStorageService.setWishlist([]);
  }
}
