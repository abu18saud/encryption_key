import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';
import { ReportsService } from 'src/app/services/reports.service';
import { ReportDialogComponent } from 'src/app/tools/report-dialog/report-dialog.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  items: any = [];
  constructor(private reportsService: ReportsService,
    public dialog: MatDialog,
    public translateService: TranslateService) {
    this.reportsService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      data: { item: item },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  downloadOffersFile(item: any) {
    FileSaver.saveAs(item.report_file, item.en_name + new Date().getDate() +'-'+ (new Date().getMonth() + 1) +'-'+ new Date().getFullYear() +'.pdf');

  }
}
