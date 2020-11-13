import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'activities', loadChildren: () => import('./features/activities/activities.module').then(m => m.ActivitiesModule) },
  { path: 'workitems', loadChildren: () => import('./features/workitems/workitems.module').then(m => m.WorkitemsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
