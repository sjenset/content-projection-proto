import { Component, Type } from '@angular/core';

import { ContextMenuService } from './services/context-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contextMenuComponent$ = null;
  public menuItems = [
    {
      'text': 'Forside',
      'url': '/'
    },
    {
      'text': 'Aktivitetsoversikt',
      'url': '/activities'
    },
    {
      'text': 'Mitt Arbeidsbord',
      'url': '/workitems'
    }
  ];

  constructor(contextMenuService: ContextMenuService) {
    this.contextMenuComponent$ = contextMenuService.contextMenuComponent;
  }
}
