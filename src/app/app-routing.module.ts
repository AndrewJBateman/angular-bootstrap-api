import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module'),
  },

  {
    path: 'character-list',
    loadChildren: () =>
      import('./components/pages/characters/character-list/character-list.module'),
  },
  {
    path: 'character-details/:id',
    loadChildren: () =>
      import('./components/pages/characters/character-details/character-details.module'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
