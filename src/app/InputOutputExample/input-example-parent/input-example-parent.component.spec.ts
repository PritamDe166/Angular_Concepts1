import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleParentComponent } from './input-example-parent.component';

describe('InputExampleParentComponent', () => {
  let component: InputExampleParentComponent;
  let fixture: ComponentFixture<InputExampleParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputExampleParentComponent]
    });
    fixture = TestBed.createComponent(InputExampleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
