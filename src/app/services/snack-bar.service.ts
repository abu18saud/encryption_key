import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      panelClass: 'my-custom-snackbar'
    });
  }


  open(msg: any, btn: any) {
    this.openSnackBar(msg, btn);//"يرجى التحقق من أنّ جميع المدخلات صحيحة!"
  }



}
