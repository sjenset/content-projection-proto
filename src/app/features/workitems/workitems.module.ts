import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkitemsRoutingModule } from './workitems-routing.module';
import { WorkitemsActivator } from './workitems.activator';
import { WorkitemsComponent } from './workitems.component';

@NgModule({
  declarations: [WorkitemsComponent],
  imports: [
    CommonModule,
    WorkitemsRoutingModule
  ],
  providers: [WorkitemsActivator]
})
export class WorkitemsModule { }
