import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  items: any = [];
  constructor(private reportsService: ReportsService,
    public translateService: TranslateService) {
    this.reportsService.getItems().subscribe(res => {
      this.items = res;
    });
  }
}
