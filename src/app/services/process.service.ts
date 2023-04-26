import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Process } from '../models/process.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  items: any = [];

  constructor(private localStorageService: LocalStorageService) { }

  addNewItem(newItem: any) {
    if (this.localStorageService.getPocesses().length == null) {
      this.items = [];
      this.items.push(newItem);
      this.localStorageService.setPocesses(this.items);
    } else {
      this.items = this.localStorageService.getPocesses();
      if (this.existItem(newItem.plain_text)) {

      } else {
        this.items.push(newItem);
        this.localStorageService.setPocesses(this.items);

      }
    }
  }

  updateItem(items: any) {
    this.localStorageService.setPocesses(items);
  }

  getAllItems() {
    return this.localStorageService.getPocesses();
  }

  existItem(plainText: string) {
    return (this.getAllItems().find((a: Process) => a.plain_text.toString().trim() === plainText.toString().trim()) !== undefined) ? true : false;
  }

  getTotalOfItems(): number {
    return this.localStorageService.getPocesses().length;
  }

  deleteAll() {
    this.localStorageService.setPocesses([]);
  }
}
