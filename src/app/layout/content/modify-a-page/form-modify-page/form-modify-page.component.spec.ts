import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyPageComponent } from './form-modify-page.component';

describe('FormModifyPageComponent', () => {
  let component: FormModifyPageComponent;
  let fixture: ComponentFixture<FormModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModifyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
