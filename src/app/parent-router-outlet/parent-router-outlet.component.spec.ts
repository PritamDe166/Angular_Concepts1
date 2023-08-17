import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRouterOutletComponent } from './parent-router-outlet.component';

describe('ParentRouterOutletComponent', () => {
  let component: ParentRouterOutletComponent;
  let fixture: ComponentFixture<ParentRouterOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentRouterOutletComponent]
    });
    fixture = TestBed.createComponent(ParentRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
