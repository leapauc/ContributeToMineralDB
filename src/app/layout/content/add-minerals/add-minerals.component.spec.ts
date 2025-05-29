import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMineralsComponent } from './add-minerals.component';

describe('AddMineralsComponent', () => {
  let component: AddMineralsComponent;
  let fixture: ComponentFixture<AddMineralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMineralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMineralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
