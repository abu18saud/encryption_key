import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { LangComponent } from './tools/lang/lang.component';
import { SocialMediaComponent } from './tools/social-media/social-media.component';
import { HomeComponent } from './pages/home/home.component';
import { CiphersComponent } from './pages/ciphers/ciphers.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LangComponent,
    SocialMediaComponent,
    HomeComponent,
    CiphersComponent,
    AboutUsComponent,
    ReportsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: (localStorage.getItem('currentLanguage')! != null) ? localStorage.getItem('currentLanguage')! : 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
