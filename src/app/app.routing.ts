import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';
import {LoginComponent} from '../app/login/login.component';
import {OverviewComponent} from '../app/overview/overview.component';
const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);