import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAPageComponent } from './modify-a-page.component';

describe('ModifyAPageComponent', () => {
  let component: ModifyAPageComponent;
  let fixture: ComponentFixture<ModifyAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyAPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
