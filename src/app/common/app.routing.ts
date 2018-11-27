import { Routes             } from '@angular/router';

import { UserComponent      } from '../application/user/user.component';
import { DashboardComponent } from '../application/dashboard/dashboard.component';

export const appRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		pathMatch: 'full'
	},
	{
		path: 'users',
		component: UserComponent,
		pathMatch: 'full'
	},	
	{
		path: '**',
		component: DashboardComponent,
	}
]
