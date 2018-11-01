import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';
import {PrivateComponent} from '../app/private/private.component';
import { TransactionComponent } from '../app/transaction/transaction.component';
const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent //public component
    },
   
    {
        path: 'private',
        component: PrivateComponent
    },
    {
      path:'private/transactions',
      component: TransactionComponent
    }

  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);