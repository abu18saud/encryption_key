import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  staff: any = [];

  constructor(private teamService: TeamService,
    public translateService: TranslateService) {
    this.teamService.getItems().subscribe(res => {
      this.staff = res;
    });
  }

}
