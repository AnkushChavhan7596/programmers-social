import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./features/explore/explore.routes')
        .then(m => m.exploreRoutes),
  }
];

