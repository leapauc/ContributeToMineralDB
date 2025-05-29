import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAMineralComponent } from './add-a-mineral.component';

describe('AddAMineralComponent', () => {
  let component: AddAMineralComponent;
  let fixture: ComponentFixture<AddAMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAMineralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
