import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesActivator } from './activities.activator';

@NgModule({
  imports: [
    ActivitiesRoutingModule,
    CommonModule
  ],
  declarations: [ActivitiesComponent],
  providers: [ActivitiesActivator]
})
export class ActivitiesModule { }
