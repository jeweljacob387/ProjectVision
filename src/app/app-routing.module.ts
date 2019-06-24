import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./authorization/authorization.module').then(mod => mod.AuthorizationModule)
  },
  {
    path: 'bloodbank',
    loadChildren: () => import('./bloodbank/bloodbank.module').then(mod => mod.BloodbankModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
