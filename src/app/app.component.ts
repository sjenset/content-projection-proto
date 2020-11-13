import { Component, Type } from '@angular/core';

import { ContextMenuService } from './services/context-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contextMenu: Type<any> = null;

  constructor(contextMenuService: ContextMenuService) {
    contextMenuService.contextMenuComponent.subscribe(contextMenuComponent => this.contextMenu = contextMenuComponent);
  }
}
