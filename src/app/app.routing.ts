import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';

const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent
    }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);