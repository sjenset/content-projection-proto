import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultContextMenuComponent } from './default-context-menu/default-context-menu.component';
import { LayoutWrapperComponent } from './layout-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
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
