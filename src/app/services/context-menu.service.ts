import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultContextMenuComponent } from '../layout-wrapper/default-context-menu/default-context-menu.component';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  public contextMenuComponent: BehaviorSubject<Type<any>> = new BehaviorSubject<Type<any>>(null);

  constructor() { }

  public setContextMenuComponent(contextMenuComponent: Type<any>): void {
    this.contextMenuComponent.next(contextMenuComponent);
  }

  public setDefaultContextMenu(): void {
    this.contextMenuComponent.next(DefaultContextMenuComponent);
  }
}
