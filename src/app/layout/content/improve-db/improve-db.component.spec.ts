import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveDbComponent } from './improve-db.component';

describe('ImproveDbComponent', () => {
  let component: ImproveDbComponent;
  let fixture: ComponentFixture<ImproveDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImproveDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImproveDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
