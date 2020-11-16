import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultContextMenuComponent } from './default-context-menu/default-context-menu.component';
import { LayoutWrapperComponent } from './layout-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutWrapperComponent,
    DefaultContextMenuComponent
  ],
  exports: [
    LayoutWrapperComponent,
    DefaultContextMenuComponent
  ]
})
export class LayoutWrapperModule { }
