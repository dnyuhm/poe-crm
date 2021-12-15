import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { UiComponent } from './ui/components/ui/ui.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'login', component: UiComponent, children: [
    {path: 'sign-in', component: PageSignInComponent}
  ]},
  {
    path: 'orders',
    loadChildren: () =>
      import('src/app/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('src/app/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
