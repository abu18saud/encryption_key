import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent {
  constructor(
    public translateService: TranslateService,
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  pdfSrc = this.data.item.report_file;

  ngOnInit() {
    this.pdfSrc = this.data.item.report_file;
  }

  downloadFile() {
    FileSaver.saveAs(this.pdfSrc, this.data.item.en_name + " - " + new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + '.pdf');
  }
}
