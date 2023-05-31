import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Process } from 'src/app/models/process.model';
import { AlgorithmsService } from 'src/app/services/algorithms.service';
import { CiphersService } from 'src/app/services/ciphers.service';
import { CopyService } from 'src/app/services/copy.service';
import { ProcessService } from 'src/app/services/process.service';
import { ShareLinksService } from 'src/app/services/share-links.service';
import { MatDialog } from '@angular/material/dialog';
import { HassanBookDialogComponent } from 'src/app/tools/hassan-book-dialog/hassan-book-dialog.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('plainText') plainText: ElementRef<HTMLInputElement>;
  @ViewChild('copyProcess') copyProcess: ElementRef<HTMLInputElement>;
  @ViewChild('copyResult') copyResult: ElementRef<HTMLInputElement>;
  @ViewChild('underMaintenance') underMaintenance: ElementRef<HTMLInputElement>;


  process: Process = new Process();

  currentCipher: any;
  items: any = [];

  constructor(
    public dialog: MatDialog,
    private ciphersService: CiphersService,
    public copyService: CopyService,
    public algorithmsService: AlgorithmsService,
    public shareLinkService: ShareLinksService,
    public processService: ProcessService,
    public translateService: TranslateService,
    private snackBarService: SnackBarService
  ) {
    this.ciphersService.getItems().subscribe(res => {
      this.items = res;
      this.currentCipher = res[0];
    });
    this.copyService.copyCipherTextProcess(this.process, '');
  }

  ngOnInit() {
  }

  openBookDialog() {
    const dialogRef = this.dialog.open(HassanBookDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  UnderMaintenance() {
    this.snackBarService.openSnackBarAr(this.underMaintenance.nativeElement.value, '');
  }

  currentCipherMethod(event: any) {
    this.currentCipher = event;
    this.process.algorithm = event.text_id;
  }

}
