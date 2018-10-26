import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';
import {PrivateComponent} from '../app/private/private.component';
const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent //public component
    },
   
    {
        path: 'private',
        component: PrivateComponent
    }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);