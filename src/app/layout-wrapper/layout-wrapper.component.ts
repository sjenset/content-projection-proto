import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { DefaultContextMenuComponent } from './default-context-menu/default-context-menu.component';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss']
})
export class LayoutWrapperComponent implements AfterViewInit, OnChanges {
  @Input() contextMenuComponent: Type<any>;
  @ViewChild('ContextMenu', { read: ViewContainerRef }) contextMenuContainer: ViewContainerRef;

  private contextMenu: Type<any> = DefaultContextMenuComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contextMenuComponent) {
      switch (changes.contextMenuComponent.currentValue) {
        case null:
        case true:
          this.contextMenu = DefaultContextMenuComponent;
          break;
        case false:
          this.contextMenu = null;
          break;
        default:
          this.contextMenu = changes.contextMenuComponent.currentValue;
          break;
      }

      this.setContextMenu();
    }
  }

  ngAfterViewInit(): void {
    this.setContextMenu();
  }

  private setContextMenu(): void {
    if (!this.contextMenuContainer) {
      return;
    }
    if (this.contextMenuContainer.length) {
      this.contextMenuContainer.remove(0);
    }
    if (!this.contextMenu) {
      return;
    }
    try {
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.contextMenu);

      this.contextMenuContainer.createComponent(factory);
    } catch (error) {
      console.error(error);
    }
  }
}
