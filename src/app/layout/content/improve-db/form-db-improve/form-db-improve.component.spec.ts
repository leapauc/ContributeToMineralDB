import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDbImproveComponent } from './form-db-improve.component';

describe('FormDbImproveComponent', () => {
  let component: FormDbImproveComponent;
  let fixture: ComponentFixture<FormDbImproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDbImproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDbImproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
