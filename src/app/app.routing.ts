import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';
import {LoginComponent} from '../app/login/login.component';
const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);