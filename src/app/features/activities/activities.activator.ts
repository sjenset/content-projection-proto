import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { DefaultContextMenuComponent } from '../../layout-wrapper/default-context-menu/default-context-menu.component';
import { ContextMenuService } from '../../services/context-menu.service';

@Injectable()
export class ActivitiesActivator implements CanActivate, CanDeactivate<any> {
  public constructor(private contextMenuService: ContextMenuService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.contextMenuService.setContextMenuComponent(DefaultContextMenuComponent);

    return true;
  }

  public canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    this.contextMenuService.setContextMenuComponent(null);

    return true;
  }
}
