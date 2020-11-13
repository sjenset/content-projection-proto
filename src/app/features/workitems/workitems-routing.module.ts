import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkitemsActivator } from './workitems.activator';

import { WorkitemsComponent } from './workitems.component';

const routes: Routes = [
  { path: '', component: WorkitemsComponent, canActivate: [WorkitemsActivator], canDeactivate: [WorkitemsActivator] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkitemsRoutingModule { }
