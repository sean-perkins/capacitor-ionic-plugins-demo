import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'haptics',
    loadComponent: () => import('./haptics/haptics.page').then((m) => m.HapticsPage),
  },
  {
    path: 'status-bar',
    loadComponent: () => import('./status-bar/status-bar.page').then((m) => m.StatusBarPage),
  },
  {
    path: 'keyboard',
    loadComponent: () => import('./keyboard/keyboard.page').then((m) => m.KeyboardPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

