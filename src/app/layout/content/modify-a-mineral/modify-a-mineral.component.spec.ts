import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAMineralComponent } from './modify-a-mineral.component';

describe('ModifyAMineralComponent', () => {
  let component: ModifyAMineralComponent;
  let fixture: ComponentFixture<ModifyAMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyAMineralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
