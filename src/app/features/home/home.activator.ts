import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ContextMenuService } from '../..//services/context-menu.service';


@Injectable()
export class HomeActivator implements CanActivate {
  public constructor(private contextMenuService: ContextMenuService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.contextMenuService.setContextMenuComponent(null);

    return true;
  }
}
