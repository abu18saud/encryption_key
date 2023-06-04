import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-evaluation-dialog',
  templateUrl: './evaluation-dialog.component.html',
  styleUrls: ['./evaluation-dialog.component.scss']
})
export class EvaluationDialogComponent {
  constructor(
    public translateService: TranslateService,
    public dialogRef: MatDialogRef<EvaluationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  pdfSrc = this.data.item.evaluation_file;

  ngOnInit() {
    this.pdfSrc = this.data.item.evaluation_file;
  }

  downloadFile() {
    FileSaver.saveAs(this.pdfSrc, this.data.item.en_name + " - " + new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + '.pdf');
  }
}
