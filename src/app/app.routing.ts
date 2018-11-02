import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component';
import {PrivateComponent} from '../app/private/private.component';
import { TransactionComponent } from '../app/transaction/transaction.component';
import {OverviewComponent} from '../app/overview/overview.component';
import {AuthGuard} from './services/auth-guard.service.service';
const appRoutes: Routes = [
    {
      path: '',
      component: HomepageComponent //public component
    },
    {
        path: 'private',
        component: PrivateComponent,
        canActivate: [AuthGuard],
    },
    {
      path:'private/transactions',
      component: TransactionComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'private/overview',
      component: OverviewComponent,
      canActivate: [AuthGuard]
    },
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);