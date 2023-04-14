import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CiphersComponent } from './pages/ciphers/ciphers.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ciphers', component: CiphersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
