import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./pages/customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.page').then( m => m.TeamPage)
  },
  {
    path: 'selected-tasks',
    loadComponent: () => import('./pages/selected-tasks/selected-tasks.page').then( m => m.SelectedTasksPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'request',
    loadComponent: () => import('./pages/request/request.page').then( m => m.RequestPage)
  },
];
