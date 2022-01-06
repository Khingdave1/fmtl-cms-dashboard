import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from 'src/app/modules/overview/overview.component';
import { PagesComponent } from 'src/app/modules/pages/pages.component';
import { MenuComponent } from 'src/app/modules/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PagesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
