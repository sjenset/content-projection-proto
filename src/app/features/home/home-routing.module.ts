import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeActivator } from './home.activator';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [HomeActivator] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
