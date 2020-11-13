import { Component, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { DefaultContextMenuComponent } from './default-context-menu/default-context-menu.component';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss']
})
export class LayoutWrapperComponent implements OnChanges {
  @Input() contextMenuComponent: Type<any>;
  @ViewChild('ContextMenu', { read: ViewContainerRef }) contextMenuContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contextMenuComponent) {
      this.setContextMenu(changes.contextMenuComponent.currentValue);
    }
  }

  private setContextMenu(contextMenu: Type<any> = DefaultContextMenuComponent): void {
    if (!this.contextMenuContainer) {
      return;
    }
    if (this.contextMenuContainer.length) {
      this.contextMenuContainer.remove(0);
    }
    if (!contextMenu) {
      return;
    }
    try {
      const factory = this.componentFactoryResolver.resolveComponentFactory(contextMenu);

      this.contextMenuContainer.createComponent(factory);
    } catch (error) {
      console.error(error);
    }
  }
}
