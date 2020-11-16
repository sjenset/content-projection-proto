import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyContextMenuComponent } from './empty-context-menu.component';

describe('DefaultContextMenuComponent', () => {
  let component: EmptyContextMenuComponent;
  let fixture: ComponentFixture<EmptyContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
