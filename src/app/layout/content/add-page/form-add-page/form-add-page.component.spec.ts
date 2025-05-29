import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPageComponent } from './form-add-page.component';

describe('FormAddPageComponent', () => {
  let component: FormAddPageComponent;
  let fixture: ComponentFixture<FormAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
