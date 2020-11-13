import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContextMenuComponent } from './default-context-menu.component';

describe('DefaultContextMenuComponent', () => {
  let component: DefaultContextMenuComponent;
  let fixture: ComponentFixture<DefaultContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
