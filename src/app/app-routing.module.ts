import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { PagesComponent } from './modules/pages/pages.component';
import { SigninComponent } from './modules/signin/signin.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  // Auth
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
        data: {
          title: 'Sign In',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          title: 'Forgot Password',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  },

  // Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
        data: {
          title: 'Overview',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'pages',
        component: PagesComponent,
        data: {
          title: 'Pages',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projects',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
