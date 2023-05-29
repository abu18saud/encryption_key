import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-hassan-book-dialog',
  templateUrl: './hassan-book-dialog.component.html',
  styleUrls: ['./hassan-book-dialog.component.scss']
})
export class HassanBookDialogComponent {
  constructor(
    public translateService: TranslateService,
    public dialogRef: MatDialogRef<HassanBookDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  downloadFile() {
    FileSaver.saveAs('assets/pdf/curricula/Applied_Cryptography.pdf', 'Applied_Cryptography.pdf');
  }
}