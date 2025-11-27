import { Routes } from '@angular/router';
import { Exemplo1 } from './pages/exemplo1/exemplo1';

export const routes: Routes = [
  {path:'', redirectTo:"welcome", pathMatch: 'full'},
  {path:"welcome", loadComponent: () => import ('./pages/welcome/welcome').then(c => c.Welcome) },


  /**Rota padrão sem laseyload */
  {path:"pages/uc00604", component: Exemplo1},
  {path:"pages/autenticacao", loadComponent: () => import('./pages/authentication/authentication').then(c => c.Authentication)},

  {path:"**", loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
