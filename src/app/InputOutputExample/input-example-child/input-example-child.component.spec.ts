import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleChildComponent } from './input-example-child.component';

describe('InputExampleChildComponent', () => {
  let component: InputExampleChildComponent;
  let fixture: ComponentFixture<InputExampleChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputExampleChildComponent]
    });
    fixture = TestBed.createComponent(InputExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
