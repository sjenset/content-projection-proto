import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutWrapperModule } from './layout-wrapper/layout-wrapper.module';
import { ContextMenuService } from './services/context-menu.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutWrapperModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ContextMenuService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
