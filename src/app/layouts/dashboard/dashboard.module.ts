import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from 'src/app/modules/overview/overview.component';
import { PagesComponent } from 'src/app/modules/pages/pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from 'src/app/modules/projects/projects.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { AddComponent } from 'src/app/modules/add/add.component';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import { ReplyComponent } from 'src/app/modules/reply/reply.component';
import { DeleteComponent } from 'src/app/modules/delete/delete.component';
import { AlertPopupComponent } from 'src/app/modules/alert-popup/alert-popup.component';
import { InvestmentComponent } from 'src/app/modules/investment/investment.component';
import { FinanceComponent } from 'src/app/modules/finance/finance.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PagesComponent,
    ProjectsComponent,
    InvestmentComponent,
    FinanceComponent,
    AboutComponent,
    ContactComponent,
    AddComponent,
    EditComponent,
    ReplyComponent,
    DeleteComponent,
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
