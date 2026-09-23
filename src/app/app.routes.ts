import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.page').then(m => m.AdminPage)
  }

];
