import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesActivator } from './activities.activator';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent,  canActivate: [ActivitiesActivator], canDeactivate: [ActivitiesActivator] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
