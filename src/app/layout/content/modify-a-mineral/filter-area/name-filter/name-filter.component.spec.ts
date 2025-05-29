import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralNameFilterComponent } from './name-filter.component';

describe('MineralNameFilterComponent', () => {
  let component: MineralNameFilterComponent;
  let fixture: ComponentFixture<MineralNameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineralNameFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MineralNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
