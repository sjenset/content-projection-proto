import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { ContextMenuService } from '../..//services/context-menu.service';
import { AlternateContextMenuComponent } from './alternate-context-menu/alternate-context-menu.component';


@Injectable()
export class WorkitemsActivator implements CanActivate, CanDeactivate<any> {
  public constructor(private contextMenuService: ContextMenuService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.contextMenuService.setContextMenuComponent(AlternateContextMenuComponent);

    return true;
  }

  public canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    this.contextMenuService.setContextMenuComponent(null);

    return true;
  }
}
