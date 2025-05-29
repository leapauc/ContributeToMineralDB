import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFilterComponent } from './complex-filter.component';

describe('ComplexFilterComponent', () => {
  let component: ComplexFilterComponent;
  let fixture: ComponentFixture<ComplexFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
