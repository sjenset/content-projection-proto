import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateContextMenuComponent } from './alternate-context-menu.component';

describe('AlternateContextMenuComponent', () => {
  let component: AlternateContextMenuComponent;
  let fixture: ComponentFixture<AlternateContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
