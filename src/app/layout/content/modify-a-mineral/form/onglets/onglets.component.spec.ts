import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletsComponent } from './onglets.component';

describe('FormComponent', () => {
  let component: OngletsComponent;
  let fixture: ComponentFixture<OngletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngletsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OngletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
