import { Routes             } from '@angular/router';

import { AuthGuard          } from './auth.guard';
import { UserComponent      } from '../application/user/user.component';
import { DashboardComponent } from '../application/dashboard/dashboard.component';
import { LoginComponent     } from '../application/login/login.component';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UserComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];
