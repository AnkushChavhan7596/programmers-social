import { Routes } from '@angular/router';

export const exploreRoutes: Routes = [
  {
    path: 'peoples',
    loadComponent: () =>
      import('./pages/peoples/peoples').then(m => m.Peoples),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts').then(m => m.Posts),
  }
];
