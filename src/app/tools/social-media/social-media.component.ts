import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  items: any = [];

  constructor(private socialMediaService: SocialMediaService,
    public translateService: TranslateService) {
    this.socialMediaService.getItems().subscribe(res => {
      this.items = res;
    });
  }

}
